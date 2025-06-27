import React from "react";
import Button from "../components/reusable/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16" style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <section className="max-w-[1480px] flex items-center mx-auto px-[20px] justify-between h-full">
        <div className="flex items-center gap-[120px]">
          <div>
            <img src="" alt="kudaLogo" />
          </div>
          <div className="flex items-center gap-20 text-[#40196d] font-bold text-[14px]">
            <Link to="/">
              <nav>Personal</nav>
            </Link>
            <Link to="/business">
              <nav>Business</nav>
            </Link>
            <Link to="/company">
              <nav>Company</nav>
            </Link>
            <Link to="/help">
              <nav>Help</nav>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-9">
          <Button label="Sign in" textColor="#40196d" />
          <Button
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
