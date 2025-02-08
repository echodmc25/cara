"use client"; // ✅ Mark this as a client component

import { usePathname } from "next/navigation";
import Header from "./Header"; // Adjust the import path if needed

const HeaderWrapper = () => {
  const pathname = usePathname();

  // ✅ Hide header if the path is "/[id]"
  const hideHeader = /^\/\d+$/.test(pathname);

  return hideHeader ? null : <Header />;
};

export default HeaderWrapper;
