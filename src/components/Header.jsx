import Link from "next/link";
import Image from "next/image";

import headerLogo from "@/public/assets/header-logo.webp";
import { headerSideLeft } from "@/constants/assets";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import TextField from "../ui/TextField";

function Header() {
  return (
    <header className="sticky top-0 mb-10 py-4 border-b-2">
      <nav className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-10">
          <div>
            <Image
              priority={true}
              src={headerLogo}
              alt="Home"
              width="0"
              height="0"
              sizes="100vw"
              className="w-12 h-auto"
            />
          </div>
          <div className="flex items-center gap-x-2">
            <IoLocationOutline />
            <Link className="block py-2" href="/">
              قائم‌شهر
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <p>دسته‌ها</p>
            <MdKeyboardArrowDown />
          </div>

          <TextField
            placeholder="جستجو در همه آگهی‌ها"
            name="search"
            className="w-96"
          />
        </div>

        <ul className="flex justify-center items-center gap-x-6">
          {headerSideLeft.map((item, index) => (
            <li
              key={index}
              className={item?.redClass ? "btn btn--primary" : ""}>
              <Link href="/" className="flex items-center gap-x-2">
                {item.icon && <span>{item.icon}</span>}{" "}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
