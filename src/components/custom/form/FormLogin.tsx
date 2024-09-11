import { useFormik } from "formik";
import * as Yup from "yup";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import InputPassword from "@components/custom/element/InputPassword";
const FormLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("Email không được để trống"),
      password: Yup.string()
        .min(8, "Your password must be at least 8 character!")
        .max(29, "Your password must be under 29 character!")
        .required("Mật khẩu không được để trống"),
    }),
    onSubmit: async ({ email, password }) => {
      console.log("Sending to request!", email, password);
    },
  });

  return (
    <form
      className="flex flex-col gap-3 w-full items-center   "
      action="POST"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col text-center">
        <span className=" text-xl font-semibold">Đăng nhập</span>

        <span className="">Hoàn thiện thông tin để tiếp tục</span>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col">
          <label htmlFor="email">Tài khoản</label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            className={
              formik.errors.email && formik.touched.email
                ? "px-3 py-2 rounded focus:bg-white  border border-red-500"
                : "bg-[#eee] px-3 py-2 rounded focus:bg-white"
            }
          />
        </div>
        {formik.errors.email && formik.touched.email && (
          <span style={{ color: "red" }} className="text  fs-13">
            {formik.errors.email}
          </span>
        )}
        <InputPassword
          name="password"
          id="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          className={
            formik.errors.password && formik.touched.password
              ? "px-3 py-2 rounded focus:bg-white  border border-red-500"
              : "bg-[#eee] px-3 py-2 rounded focus:bg-white"
          }
        />
        {formik.errors.password && formik.touched.password && (
          <span style={{ color: "red" }} className="text  fs-13">
            {formik.errors.password}
          </span>
        )}
      </div>

      <div className=" flex justify-end items-center  w-full">
        <span className="text-xs font-medium text-end  ">Quên mật khẩu</span>
      </div>

      <button
        className="py-2 bg-blue-700 rounded text-white w-full"
        type="submit"
      >
        Đăng nhập
      </button>

      <div className=" text-center  w-full">
        <span className="">Đăng nhập bằng</span>
        <div className="flex text-3xl px-12 pt-4 justify-around">
          <FaFacebook className="text-[#1877f2] text-4xl" />
          <FcGoogle className="text-4xl" />
          <FaGithub className="text-4xl" />
        </div>
      </div>
    </form>
  );
};

export default FormLogin;
