import React from "react";
import Link from "../components/reusable/Link";

const Navbar = () => {
  return (
    <div className="h-20">
      <section className="max-w-[1480px] flex items-center mx-auto px-[20px] justify-between h-full">
        <div className="flex items-center gap-[120px]">
          <div>
            <img src="" alt="kudaLogo" />
          </div>
          <div className="flex items-center gap-20 text-[#40196d] font-bold text-[14px]">
            <nav>Personal</nav>
            <nav>Business</nav>
            <nav>Company</nav>
            <nav>Help</nav>
          </div>
        </div>
        <div className="flex items-center gap-9">
          <Link label="Sign in" textColor="#40196d" />
          <Link
            label="Join Kuda"
            bgColor="#40196d"
            textColor="#fff"
            padding="12px 28px"
            border="10px"
          />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
