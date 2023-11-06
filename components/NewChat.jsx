import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const NewChat = () => {
  return (
    <>
      <div className="border border-gray-700 items-center justify-center gap-5 flex rounded-lg px-5 py-3 text-sm sace-x-2 hover:bg-gray-700/70 cursor-pointer text-gray transition-all duration-200 ease-out text-white">
        <PlusIcon className="h-4 w-4" />
        <p>New Chat</p>
      </div>
    </>
  );
};

export default NewChat;
