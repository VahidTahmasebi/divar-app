import { FaRegUser } from "react-icons/fa";
import { BsChat } from "react-icons/bs";

import { MdOutlineHomeWork } from "react-icons/md";
import { IoCarOutline } from "react-icons/io5";
import { TbDeviceRemote } from "react-icons/tb";
import { BsLamp } from "react-icons/bs";
import { RiBrush4Line } from "react-icons/ri";
import { FiWatch } from "react-icons/fi";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineChairAlt } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiMapPinUserLine } from "react-icons/ri";

export const headerSideLeft = [
  {
    title: "دیوار من",
    route: "/",
    icon: <FaRegUser />,
    redClass: false,
  },
  {
    title: "چت",
    route: "/",
    icon: <BsChat />,
    redClass: false,
  },
  {
    title: "پشتیبانی",
    route: "/",
    icon: "",
    redClass: false,
  },
  {
    title: "ثبت آگهی",
    route: "/",
    icon: "",
    redClass: true,
  },
];

export const sidebarCategory = [
  {
    title: "املاک",
    route: "/",
    icon: <MdOutlineHomeWork />,
    new: false,
  },
  {
    title: "وسایل نقلیه",
    route: "/",
    icon: <IoCarOutline />,
    new: false,
  },
  {
    title: "کالای دیجیتال",
    route: "/",
    icon: <TbDeviceRemote />,
    new: false,
  },
  {
    title: "خانه و آشپزخانه",
    route: "/",
    icon: <BsLamp />,
    new: false,
  },
  {
    title: "خدمات",
    route: "/",
    icon: <RiBrush4Line />,
    new: false,
  },
  {
    title: "وسایل شخصی",
    route: "/",
    icon: <FiWatch />,
    new: false,
  },
  {
    title: "سرگرمی و فراغت",
    route: "/",
    icon: <MdOutlineSportsBasketball />,
    new: false,
  },
  {
    title: "اجتماعی",
    route: "/",
    icon: <IoPeopleOutline />,
    new: false,
  },
  {
    title: "تجهیزات و صنعتی",
    route: "/",
    icon: <MdOutlineChairAlt />,
    new: false,
  },
  {
    title: "استخدام و کاریابی",
    route: "/",
    icon: <IoBriefcaseOutline />,
    new: false,
  },
  {
    title: "رزومه کارجویان",
    route: "/",
    icon: <RiMapPinUserLine />,
    new: true,
  },
];
