import MainLayout from "~/components/main-layout";
import LayoutCarousel from "~/components/custom/embla-carousel/LayoutCarousel";
import { EmblaOptionsType } from "embla-carousel";
import PrivateRouter from "~/components/private-route";
const optionCarousel: EmblaOptionsType = {
  axis: "y",
};
export type unitCourse = {
  title: string;
  subtitle?: string;
  subtitle2?: string;
};
const contentNav: unitCourse[] = [
  {
    title: "Demo kết quả đạt được",
  },
  {
    title: "Yêu cầu trong quá trình học",
  },
  {
    title: "Những khái niệm cơ bản",
  },
  {
    title: "Toán tử trong Javascript",
  },
  {
    title: "Khai báo trong Javascript",
  },
];
export default function CoursePage({ params }: { params: { slug: string } }) {
  console.log("check param: ", params.slug);

  return (
    <PrivateRouter>
      <MainLayout coursePage={true}>
        <div className=" flex min-h-screen">
          <div className="flex items-center justify-center w-full">
            <LayoutCarousel
              slides={[1, 2, 3, 4, 5]}
              options={optionCarousel}
              contentNav={contentNav}
              //    className=" bg-red-500 "
            />
          </div>
        </div>
      </MainLayout>
    </PrivateRouter>
  );
}
