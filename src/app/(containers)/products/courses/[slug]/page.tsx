import MainLayout from "~/components/main-layout";
import PrivateRouter from "~/components/private-route";

export type unitCourse = {
  title: string;
  subtitle?: string;
  subtitle2?: string;
};

export default function CoursePage() {
  return (
    <PrivateRouter>
      <MainLayout coursePage={true}>
        <div className=" flex min-h-screen">
          <div className="flex items-center justify-center w-full">
           
          </div>
        </div>
      </MainLayout>
    </PrivateRouter>
  );
}
