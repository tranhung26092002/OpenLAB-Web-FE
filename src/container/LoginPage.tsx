// import { handleLogin } from "@/services/data";
import { useState } from "react";
import CloudKey from "@/components/custom/CloudKey";
import aiService from "@/assets/image/login/Chatbot_service.png";
import FormLogin from "@/components/custom/form/FormLogin";
import FormSignUp from "@/components/custom/form/FormSignUp";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className=" flex justify-center items-center w-screen h-screen px-20 bg-gradient-to-r from-blue-900 from-0% via-cyan-800 via-58% to-sky-800 to-100%">
      <div className="h-full flex justify-start py-20 w-1/3 ">
        <CloudKey />
      </div>
      <div className="flex flex-col px-6 py-6 shadow-xl bg-white rounded-md w-1/4 justify-center gap-3">
        {isSignUp === true ? <FormSignUp /> : <FormLogin />}

        {isSignUp === true ? (
          <div className="text-sm font-medium w-full text-center">
            <span>Quay lại đăng nhập?</span>{" "}
            <span
              className="font-semibold cursor-pointer"
              onClick={() => setIsSignUp(false)}
            >
              Đăng nhập ngay
            </span>
          </div>
        ) : (
          <div className="text-sm font-medium w-full text-center">
            <span>Bạn chưa có tài khoản?</span>{" "}
            <span
              className="font-semibold cursor-pointer"
              onClick={() => setIsSignUp(true)}
            >
              Đăng kí ngay
            </span>
          </div>
        )}
      </div>
      <div className="h-full flex justify-end items-end py-28 w-1/3">
        <img
          src={aiService}
          alt="cloud-image"
          className="w-56 object-cover object-center h-56"
        />
      </div>
    </div>
  );
};

export default LoginPage;
