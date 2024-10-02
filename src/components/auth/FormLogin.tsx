"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { LoginBody, LoginBodyType } from "~/types/auth/AuthType";
import { handleLogin } from "~/services/auth/authService";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

import { Input } from "~/components/ui/input";
import { useSearchParams } from "next/navigation";
import { decodeUrl } from "~/utils/encryption-url";
import { useAuthStore, UserProps } from "~/store/auth/AuthStore";
export default function LoginForm() {
  const { setUser, setIsAuth } = useAuthStore();
  const router = useRouter();
  const query = useSearchParams();
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: LoginBodyType) {
    const res = await handleLogin(values.email, values.password);
    const queryUrl = query?.get("back_to");
    if (res && res.status === 200 && res.payload) {
      const payload = res.payload as UserProps;
      const user: UserProps = {
        fullname: payload.fullname,
        address: payload.address,
        dateOfBirth: payload.dateOfBirth,
        email: payload.email,
        role: payload.role,
        _id: payload._id,
        access_token: payload.access_token,
      };
      setUser(user);
      setIsAuth(true);
      if (queryUrl) {
        const back_to = decodeUrl(queryUrl);
        router.push(`${back_to}`);
      } else {
        router.replace('/')
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            form.handleSubmit(onSubmit);
          }
        }}
        className="space-y-4  bg-white h-fit px-5 py-4 rounded-md"
      >
        <div className="flex flex-col text-center">
          <span className=" text-xl font-semibold">Đăng nhập</span>
          <span className="">Hoàn thiện thông tin để tiếp tục</span>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên tài khoản</FormLabel>
              <FormControl>
                <Input placeholder="Nhập email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input placeholder="Nhập mật khẩu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className=" flex justify-end items-center  w-full">
          <span className="text-xs font-medium text-end  ">Quên mật khẩu</span>
        </div>
        <Button type="submit" className="bg-blue-700 w-full">
          Đăng nhập
        </Button>
        <div className=" text-center  w-full">
          <span className="">Đăng nhập bằng</span>
          <div className="flex text-3xl px-12 pt-4 justify-around">
            <FaFacebook className="text-[#1877f2] text-4xl" />
            <FcGoogle className="text-4xl" />
            <FaGithub className="text-4xl" />
          </div>
        </div>
        <div className="text-sm font-medium w-full text-center">
          <span>Bạn chưa có tài khoản?</span>
          <span className="font-semibold ">Đăng kí ngay</span>
        </div>
      </form>
    </Form>
  );
}
