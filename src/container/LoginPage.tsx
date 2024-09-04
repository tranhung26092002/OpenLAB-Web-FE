import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { handleLogin } from "@services/data";
import { FormEvent, useState } from "react";
import imageleft from "@assets/image/login/0a76d34eeb704c2e1561.jpg";
import aiService from "@assets/image/service-image/Chatbot_service.png";
type event = FormEvent<HTMLFormElement>;
const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLoginUser = async (e: event) => {
    e.preventDefault();
    console.log("Sending to request!", email, password);
    const res = await handleLogin(email, password);
    console.log("check response: ", res);
  };
  return (
    <div className=" flex justify-center items-center w-screen h-screen px-20 bg-gradient-to-r from-blue-900 from-0% via-cyan-800 via-58% to-sky-800 to-100%">
      <div className="h-full flex justify-center py-28 w-1/3">
        <img
          src={imageleft}
          alt="cloud-image"
          className="w-80 object-cover object-center h-80"
        />
      </div>
      <div className="flex  px-8 py-6 shadow-xl bg-white rounded-md w-1/4 justify-center">
        <form
          className="flex flex-col gap-3 w-full items-center   "
          action="POST"
          onSubmit={(e) => handleLoginUser(e)}
        >
          <div className="flex flex-col text-center">
            <span className=" text-xl font-semibold">Đăng nhập</span>
            <span className="font-light">Hoàn thiện thông tin để tiếp tục</span>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex flex-col">
              <label htmlFor="email">Tài khoản</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#eee] px-3 py-2 rounded focus:bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#eee] px-3 py-2 rounded focus:bg-white"
              />
            </div>
          </div>
          <div className=" flex justify-between items-center">
            {/* <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                name="remeber-password"
                id="remeber-password"
              />
              <label htmlFor="remeber-password" className="text-xs font-medium">
                Nhớ mật khẩu
              </label>
            </div> */}
            <span className="text-xs font-medium text-end">Quên mật khẩu</span>
          </div>
          <button className="py-2 bg-blue-700 rounded text-white w-full" type="submit">
            Đăng nhập
          </button>
          <div className=" text-center  w-full">
            <span className="">Đăng nhập bằng</span>
            <div className="flex text-3xl px-12 pt-4 justify-around">
              <FaFacebook className="text-[#1877f2] text-4xl" />
              <FcGoogle className="text-4xl"/>
              <FaGithub className="text-4xl"/>
            </div>
          </div>
          <div className="text-sm font-medium">
            <span>Bạn chưa có tài khoản?</span>{" "}
            <span className="font-semibold">Đăng kí ngay</span>
          </div>
        </form>
      </div>
      <div className="h-full flex justify-center items-end py-28 w-1/3">
        <img
          src={aiService}
          alt="cloud-image"
          className="w-72 object-cover object-center h-72"
        />
      </div>
    </div>
  );
};

export default LoginPage;
