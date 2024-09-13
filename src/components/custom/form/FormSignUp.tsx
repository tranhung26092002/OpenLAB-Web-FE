import { useFormik } from "formik";
import * as Yup from "yup";
import InputPassword from "@/components/custom/element/InputPassword";
const FormSignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("Email không được để trống"),
      password: Yup.string()
        .min(8, "Your password must be at least 8 character!")
        .max(29, "Your password must be under 29 character!")
        .required("Mật khẩu không được để trống"),
      name: Yup.string().required("Họ và tên không được để trống"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Xác nhận mật khẩu không được để trống"),
    }),
    onSubmit: async ({ email, password, name, confirmPassword }) => {
      console.log(
        "Sending to request!",
        email,
        password,
        name,
        confirmPassword
      );
    },
  });

  return (
    <form
      className="flex flex-col gap-4 w-full items-center   "
      action="POST"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col text-center">
        <span className=" text-xl font-semibold">Đăng kí</span>

        <span className="">Hoàn thiện thông tin để tiếp tục</span>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col">
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
            className={
              formik.errors.name && formik.touched.name
                ? "px-3 py-2 rounded focus:bg-white  border border-red-500"
                : "bg-[#eee] px-3 py-2 rounded focus:bg-white"
            }
          />
        </div>

        {formik.errors.name && formik.touched.name && (
          <span style={{ color: "red" }} className="text  fs-13">
            {formik.errors.name}
          </span>
        )}
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
          value={formik.values.password}
          onChange={formik.handleChange}
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

        <InputPassword
          name="password"
          id="password"
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          className={
            formik.errors.password && formik.touched.password
              ? "px-3 py-2 rounded focus:bg-white  border border-red-500"
              : "bg-[#eee] px-3 py-2 rounded focus:bg-white"
          }
        />

        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <span style={{ color: "red" }} className="text  fs-13">
            {formik.errors.confirmPassword}
          </span>
        )}
      </div>
      <button
        className="py-2 bg-blue-700 rounded text-white w-full"
        type="submit"
      >
        Đăng kí
      </button>
    </form>
  );
};

export default FormSignUp;
