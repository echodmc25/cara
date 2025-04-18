import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-10 items-center justify-center">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-mahroon"></div>
      </div>
    </div>
  );
}
