import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { useAppContext } from "../contexts/AppContext";

function PageHeader({ title }) {
  const { showSidebar, openSidebar } = useAppContext();

  return (
    <header className="py-10">
      <div className="float-left cursor-pointer" onClick={openSidebar}>
        <MenuIcon className="h-6 w-6" onClick={openSidebar} />
      </div>
      <h3 className="text-center text-lg font-semibold">{title}</h3>
    </header>
  );
}

export default PageHeader;
