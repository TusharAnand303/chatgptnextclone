import React from "react";
import NewChat from "./NewChat";
import ModelSecection from "./ModelSecection";
import MapChat from "./MapChat";

const Sidebar = () => {
  return (
    <>
      <div className="p-2 flex flex-col h-screen bg-[#]">
        <div className="flex-1">
          <div>
            {/* new chat  */}
            <NewChat/>
            <div>
                {/* model selection */} <ModelSecection/>
            </div>
            {/* map through chats  */}
            <MapChat/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
