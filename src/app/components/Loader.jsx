// components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-white border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
