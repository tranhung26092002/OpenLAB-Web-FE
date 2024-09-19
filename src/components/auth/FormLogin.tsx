"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { LoginBody, LoginBodyType } from "~/types/auth/AuthType";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

export default function LoginForm() {
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: LoginBodyType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[30%] bg-white h-fit px-5 py-4 rounded-md"
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
          <Link href="/register">
            <span className="font-semibold cursor-pointer">Đăng kí ngay</span>
          </Link>
        </div>
      </form>
    </Form>
  );
}
