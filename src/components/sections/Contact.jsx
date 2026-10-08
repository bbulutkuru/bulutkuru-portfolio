import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  Loader2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PERSONAL_INFO, EMAILJS } from "../../utils/constants";

const whatsappDigits = (PERSONAL_INFO.whatsapp || "").replace(/\D/g, "");

const contactInfo = [
  {
    icon: Mail,
    title: "E-posta",
    value: PERSONAL_INFO.email,
    link: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: MapPin,
    title: "Konum",
    value: PERSONAL_INFO.location,
    link: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: PERSONAL_INFO.linkedin,
    color: "hover:text-blue-400",
  },
  {
    icon: Github,
    name: "GitHub",
    url: PERSONAL_INFO.github,
    color: "hover:text-gray-300",
  },
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    url: whatsappDigits ? `https://wa.me/${whatsappDigits}` : "",
    color: "hover:text-green-400",
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: PERSONAL_INFO.instagram,
    color: "hover:text-pink-400",
  },
].filter((item) => item.url && item.url.trim());

const inputClass =
  "w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;
    // Bot tuzağı: gizli alan doluysa sessizce yok say
    if (form.elements.website?.value) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form, {
        publicKey: EMAILJS.publicKey,
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS gönderimi başarısız:", error);
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <section
      id="contact"
      aria-label="İletişim"
      className="relative min-h-screen py-20 px-4 bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            İletişime Geçin
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Yeni bir proje mi başlatmak istiyorsunuz? Beraber çalışalım!
            Aşağıdaki formu doldurarak veya doğrudan email göndererek benimle
            iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                İletişim Bilgileri
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{item.title}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-white text-lg hover:text-blue-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white text-lg">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Sosyal Medya</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:border-blue-500 transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 via-blue-500/10 to-purple-400/10 border border-blue-500/20 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-3">
                💼 Çalışma Durumu
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Şu anda yeni projeler için müsaitim. Full-time, part-time veya
                freelance projelerde çalışabilirim.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Mesaj Gönderin</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
              {/* Bot tuzağı — görünmez, kullanıcı doldurmaz */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className={inputClass}
                  placeholder="Proje hakkında konuşmak istiyorum"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className={`${inputClass} resize-none`}
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <div aria-live="polite">
                {status === "success" && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-400 text-sm">
                    ✓ Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.
                  </div>
                )}
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-sm">
                    Mesaj gönderilemedi. Lütfen tekrar deneyin ya da doğrudan{" "}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="underline">
                      {PERSONAL_INFO.email}
                    </a>{" "}
                    adresine yazın.
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" aria-hidden="true" />
                    Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
