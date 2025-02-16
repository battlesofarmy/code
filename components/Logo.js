import Link from "next/link";
import React from "react";
import { FaRocket } from "react-icons/fa6";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h2 className="text-2xl text-gray-200 flex gap-2 items-center">
        <FaRocket className="text-orange-600" />
        Muntasir Ui
      </h2>
    </Link>
  );
}