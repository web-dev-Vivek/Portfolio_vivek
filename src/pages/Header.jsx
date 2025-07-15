import React from "react";

function Header() {
  return (
    <div>
      <div className="md:h-[13vh] h-[10vh] fixed text-[11px] w-full text-black flex justify-between pl-10 pr-10 md:gap-40 gap-15  items-center">
        <a href="" className="border-b-1 border-black">
          HOME
        </a>
        <a href="" className="hidden md:block border-b-1 border-black">
          PLAYBOOK
        </a>
        <a href="" className="hidden md:block border-b-1 border-black">
          SOCIALS
        </a>
        <a href="" className="border-b-1 border-black">
          CONTACTS
        </a>
      </div>
    </div>
  );
}

export default Header;
