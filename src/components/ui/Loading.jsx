import React from "react";
import { Terminal } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-purple-400 rounded-full animate-spin animation-delay-150"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Terminal className="w-10 h-10 text-blue-400" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Yükleniyor</h3>
          <div className="flex gap-1 justify-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-150"></span>
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
