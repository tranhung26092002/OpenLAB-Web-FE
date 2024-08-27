import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
const LoginPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 from-0% via-cyan-800 via-58% to-sky-800 to-100% flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col px-6 py-6 shadow-xl bg-white rounded-md">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <span className="text-center text-xl font-semibold">Đăng nhập</span>
            <span className="font-light">Hoàn thiện thông tin để tiếp tục</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col">
              <label htmlFor="email">Tài khoản</label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-[#eee] px-3 py-2 rounded focus:bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-[#eee] px-3 py-2 rounded focus:bg-white"
              />
            </div>
          </div>
          <div className=" flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                name="remeber-password"
                id="remeber-password"
              />
              <label htmlFor="remeber-password" className="text-xs font-medium">
                Nhớ mật khẩu
              </label>
            </div>
            <span className="text-xs font-medium">Quên mật khẩu</span>
          </div>
          <button className="py-2 bg-blue-700 rounded text-white">
            Đăng nhập
          </button>
          <div className=" text-center">
            <span className="">Đăng nhập bằng</span>
            <div className="flex text-3xl px-10 pt-4 justify-around">
              <FaFacebook className="text-[#1877f2]" />
              <FcGoogle />
              <FaGithub />
            </div>
          </div>
          <div className="text-xs font-medium">
            <span>Bạn chưa có tài khoản?</span> <span className="font-semibold">Đăng kí ngay</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
