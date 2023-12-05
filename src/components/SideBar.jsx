import Link from "next/link";

import { sidebarCategory } from "@/constants/assets";

const SideBar = () => {
  return (
    <div className="w-3/12 flex flex-col gap-y-3">
      <h4>دسته‌ها</h4>
      <ul className="flex flex-col space-y-8">
        {sidebarCategory.map((item) => (
          <li key={item.title}>
            <Link href="/" className="flex gap-x-2">
              <span>{item.icon}</span> <span>{item.title}</span>
              {item.new && <span className="text-red-500">(جدید)</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
