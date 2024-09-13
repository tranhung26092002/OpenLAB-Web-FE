import MainLayout from "~/components/main-layout";
import LoginForm from "~/components/auth/FormLogin";

export default function LoginPage() {
  return (
    <MainLayout authPage={true}>
      <LoginForm />
    </MainLayout>
  );
}
