import React, { useState } from "react";
import {
  X,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Briefcase,
  Award,
  Building2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PERSONAL_INFO, SITE } from "../../utils/constants";
import profileImage from "../../assets/bulutkuru.png";

const whatsappDigits = (PERSONAL_INFO.whatsapp || "").replace(/\D/g, "");

const stats = [
  { icon: Briefcase, value: "15+", label: "Yıl Deneyim", color: "text-blue-400" },
  { icon: Award, value: "400+", label: "Proje", color: "text-purple-400" },
  { icon: Building2, value: "17", label: "Kurum Danışmanlığı", color: "text-green-400" },
];

const ProfileCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Profil fotoğrafı düğmesi — sağ alt köşe */}
      <div className="fixed bottom-25 right-4 md:right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Profil kartını aç"
          className="group relative w-[90px] h-[110px] md:w-[150px] md:h-[200px] rounded-xl md:rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 shadow-xl"
        >
          <img
            src={profileImage}
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 md:p-4">
            <p className="text-white text-xs md:text-sm font-semibold">
              Profili Görüntüle
            </p>
          </div>

          <div className="absolute top-2 right-2 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </button>
      </div>

      {/* Profil kartı modalı */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Profil kartı"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Kapat"
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </button>

            <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl">
              <div className="absolute -bottom-16 left-8">
                <div className="w-32 h-32 rounded-2xl border-4 border-gray-900 overflow-hidden shadow-xl">
                  <img
                    src={profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="pt-20 px-8 pb-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {PERSONAL_INFO.name}
                </h2>
                <p className="text-gray-400 text-lg">{PERSONAL_INFO.title}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <Icon className={`w-5 h-5 ${stat.color}`} aria-hidden="true" />
                      </div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  İletişim Bilgileri
                </h3>

                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 rounded-lg bg-gray-800 border border-gray-700 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-posta</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-base">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 rounded-lg bg-gray-800 border border-gray-700 group-hover:bg-green-600 group-hover:border-green-600 transition-colors">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <a href={`tel:+${whatsappDigits}`} className="text-base">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 rounded-lg bg-gray-800 border border-gray-700 group-hover:bg-purple-600 group-hover:border-purple-600 transition-colors">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Konum</p>
                    <p className="text-base">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Sosyal Medya
                </h3>
                <div className="flex flex-wrap gap-3">
                  {PERSONAL_INFO.linkedin && (
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                      <Linkedin className="w-5 h-5" aria-hidden="true" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {PERSONAL_INFO.github && (
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <Github className="w-5 h-5" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {whatsappDigits && (
                    <a
                      href={`https://wa.me/${whatsappDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                    >
                      <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                  )}
                  {PERSONAL_INFO.instagram && (
                    <a
                      href={PERSONAL_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-colors"
                    >
                      <Instagram className="w-5 h-5" aria-hidden="true" />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-300 leading-relaxed">{SITE.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
