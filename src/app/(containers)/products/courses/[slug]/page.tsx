import MainLayout from "~/components/main-layout";
import NavigateCourse from "~/components/products/courses/NavigateCourse";

export default function CoursePage() {
  return (
    <MainLayout authPage={false}>
      <div className="flex justify-start gap-0">
        <NavigateCourse />

        <div className=" bg-red-500 ">v</div>
      </div>
    </MainLayout>
  );
}
