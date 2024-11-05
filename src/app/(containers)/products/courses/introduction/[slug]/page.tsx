"use client";
import React from "react";
import MainLayout from "~/components/main-layout";
import BannerProduct from "~/components/products/BannerProduct";
import SectionBenefitProduct from "~/components/products/detail-product/SectionBenefitProduct";
import { useSWRPublic } from "~/hooks/useSWRCustom";
export default function DetailCourse({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { isLoading, data, error } = useSWRPublic(`courses/${slug}`);
  const nameCourse = data?.name;
  const description = data?.description;
  const starNumber = data?.starNumber;
  const _idCourse = data?._id
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading course data.</div>;
  return (
    <MainLayout>
      <div className="w-full ">
        <BannerProduct
          nameProduct={nameCourse}
          description={description}
          starNumber={starNumber}
          idCourse={_idCourse}
        />
        <SectionBenefitProduct data={[]} />
      </div>
    </MainLayout>
  );
}
