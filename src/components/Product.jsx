import Image from "next/image";

import { BsChat } from "react-icons/bs";

import truncateText from "@/utils/truncateText";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

const Product = ({ product }) => {
  const { title, distance, status, price, date, option, image_Url } = product;

  return (
    <div className="h-full flex justify-between gap-x-2 p-3 border-2 rounded-lg">
      <div className="w-7/12 flex flex-col justify-between">
        <h3 className="text-sm font-bold leading-6">
          {truncateText(title, 42)}
        </h3>
        <div className="text-sm text-secondary-500">
          <p>{toPersianNumbersWithComma(distance)}</p>
          <p>{status}</p>
          <p>{toPersianNumbersWithComma(price)}</p>

          <div className="flex justify-between items-center">
            {option ? (
              <p className="text-primary-800">{option}</p>
            ) : (
              <p>{date}</p>
            )}
            <BsChat />
          </div>
        </div>
      </div>
      <div>
        <Image
          src={image_Url}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-32 h-32 block rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Product;
