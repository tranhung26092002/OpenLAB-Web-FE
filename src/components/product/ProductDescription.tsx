import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaSignal } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
type ProductDescriptionProps = {
  srcImg: string;
  typeApp: string;
  nameProduct: string;
  description: string;
  id?: string | number;
};
const ProductDescription = ({
  srcImg,
  typeApp,
  nameProduct,
  description,
  id,
}: ProductDescriptionProps) => {
  return (
    <div className=" flex flex-col relative cursor-pointer w-[350px] h-[614px] rounded-xl px-6 shadow-md  py-6 item-center hover:shadow-2xl">
      <div className="mb-5 flex justify-center">
        <img
          src={srcImg}
          alt="image-product-section"
          className="w-full h-48 object-center object-fill border-[#8AD9E4] border-2 rounded bg-red-200"
        />
      </div>
      <div className="flex justify-between items-center mb-3 ">
        <div className="bg-[#081140] px-2 py-1 text-white rounded-md ">
          {typeApp}
        </div>
        <div className="flex items-center gap-2">
          <FaSignal className="text-red-500" />
          <span className="text-xs font-normal">Có sẵn</span>
        </div>
      </div>
      <div className="text-center h-[200px] ">
        <span className="text-[#081140] text-lg font-semibold ">
          {nameProduct}
        </span>
        <p className="text-sm flex gap-[2px]">
          <BiSolidQuoteAltLeft className="text-5xl font-semibold" />
          <span className="mt-3"> {description}</span>
        </p>
      </div>
      <hr />
      <div className="flex justify-end items-center mt-4">
        <Link to={`/product/${id}`}>
          <button className="rounded-full px-4 py-2 bg-white font-medium border-2 border-black flex gap-2 items-center hover:transition-colors hover:bg-black hover:text-white transition ease-in-out delay-100 ">
            Xem chi tiết <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDescription;
