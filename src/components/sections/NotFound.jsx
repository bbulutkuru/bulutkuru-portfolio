import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SITE } from "../../utils/constants";

const NotFound = () => {
  useEffect(() => {
    document.title = `Sayfa bulunamadı · ${SITE.shortTitle}`;
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.title = SITE.title;
      meta.remove();
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 bg-clip-text text-transparent mb-4">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Sayfa bulunamadı
        </h1>
        <p className="text-gray-400 mb-8">
          Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
