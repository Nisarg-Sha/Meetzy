import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full px-6 py-4 lg:px-10">
      <Link href="/" className="flex item-center gap-3">
        <Image
          src="/icons/logo4.png"
          width={32}
          height={32}
          alt="meetzy logo"
          className="max-sm:size-10"
        ></Image>
        <p className="text-[26px] font-extraboldm text-white max-sm:hidden">
          Meetzy
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
