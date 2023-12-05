import Link from "next/link";

import { sidebarCategory } from "@/constants/assets";
import { MdKeyboardArrowDown } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="w-3/12 flex flex-col gap-y-3 text-sm text-secondary-500">
      <h4 className="mb-4">دسته‌ها</h4>
      <ul className="flex flex-col space-y-5">
        {sidebarCategory.map((item) => (
          <li key={item.title}>
            <Link href="/" className="flex gap-x-2">
              <span>{item.icon}</span> <span>{item.title}</span>
              {item.new && <span className="text-primary-800">(جدید)</span>}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-2 py-3 border-y-2">
        <MdKeyboardArrowDown />
        <p>قیمت</p>
      </div>
    </div>
  );
};

export default SideBar;
