"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icons: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icons: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icons: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 1,
      name: "Upgrades",
      icons: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  useEffect(() => {}, [path]);
  return (
    <div className="h-screen p-10 border shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
      <div className="mt-5">
        {menuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <h2
              className={`flex gap-2 items-center text-gray-500 font-medium p-5 mb-2 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 ${
                path === menu.path && "text-primary bg-blue-100"
              }`}
            >
              <menu.icons />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-10 p-5 flex gap-2 items-center text-gray-500">
        <UserButton />
        Profile
      </div>
    </div>
  );
};

export default SideNav;
