import Link from "next/link";
import MobileMenu from "./MobileMenu";
import CartContent from "./CartContent";

const NavbarLink = () => {
  return (
    <div className="flex items-center">
      <div className="hidden md:flex items-center gap-4">
        <Link href="/" className=" hover:underline">
          Home
        </Link>
        <Link href="/category?=all" className=" hover:underline">
          Categories
        </Link>
        <Link href="/contact" className=" hover:underline">
          Contact
        </Link>
      </div>
      <div className=" flex items-center gap-8 justify-center ml-5">
        <CartContent />
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavbarLink;
