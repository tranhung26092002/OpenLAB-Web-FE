import {dataBenefitProduct} from "@services/data";
type SectionBenefitProductProps = {
  title?: string;
  description?: string;
  data: dataBenefitProduct[];
};
const SectionBenefitProduct = ({
  title,
  description,
  data,
}: SectionBenefitProductProps) => {
  return (
    <div>
      <div className="px-20 flex flex-col justify-center text-center">
        <span className="text-2xl font-semibold">{title}</span>
        <p className="">{description}</p>
        <div className="flex gap-3">
          {data.map((item, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <img src={item.image} alt="image-benefit-product" />
                <span>{item.label}</span>
                <p>{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionBenefitProduct;
