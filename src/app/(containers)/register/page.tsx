import RegisterForm from "~/components/auth/FormRegister";
import MainLayout from "~/components/main-layout";
export default function RegisterPage() {
  return (
    <MainLayout authPage={true}>
      <RegisterForm />
    </MainLayout>
  );
}
