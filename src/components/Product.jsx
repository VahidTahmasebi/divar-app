import Image from "next/image";

import { BsChat } from "react-icons/bs";

const Product = ({ product }) => {
  const { title, distance, status, price, date, option, image_Url } = product;

  return (
    <div className="flex justify-between items-center p-4 border-2 rounded-lg">
      <div>
        <h3 className="font-bold">{title}</h3>
        <p>{distance}</p>
        <p>{status}</p>
        <p>{price}</p>

        <div className="w-11/12 flex justify-between items-center">
          {option ? <p className="text-red-600">{option}</p> : <p>{date}</p>}
          <BsChat />
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
