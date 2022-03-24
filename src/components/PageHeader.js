import React from "react";
import { MenuIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import { useAppContext } from "../contexts/AppContext";

function PageHeader({ title, back, handleBack }) {
  const { showSidebar, openSidebar } = useAppContext();

  return (
    <header className="py-10">
      <div className="float-left cursor-pointer">
        {back ? (
          <ChevronLeftIcon className="h-6 w-6" onClick={handleBack} />
        ) : (
          <MenuIcon className="h-6 w-6" onClick={openSidebar} />
        )}
      </div>
      <h3 className="text-center text-lg font-semibold font-primary">
        {title}
      </h3>
    </header>
  );
}

export default PageHeader;
