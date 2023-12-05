import Link from "next/link";
import Image from "next/image";

import headerLogo from "@/public/assets/header-logo.webp";
import { headerSideLeft } from "@/constants/assets";

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
          <div>
            <span>{/* icon */}</span>
            <Link className="block py-2" href="/">
              قائم‌شهر
            </Link>
          </div>
          <div>
            <p>دسته‌ها</p>
            {/* arrow icon */}
          </div>

          <TextField
            placeholder="جستجو در همه آگهی‌ها"
            name="name"
            // value={name}
            // onChange={(e) => setSearch(e.target.value)}
            className="w-96"
          />
        </div>

        <ul className="flex justify-center items-center gap-x-6">
          {headerSideLeft.map((item, index) => (
            <li
              key={index}
              className={item?.redClass ? "btn btn--primary" : ""}>
              <Link href="/" className="flex gap-x-2">
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
