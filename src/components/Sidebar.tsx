import React from "react";

const Sidebar = ({ isOpen }: { isOpen: Boolean }) => {
  return (
    <div
      className={`fixed z-[15] top-0 right-0 h-screen w-[95%] bg-black/[0.2] backdrop-blur-sm flex`}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
