import React, { useState } from "react";
import { PERSONAL_INFO } from "../../utils/constants";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus("");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

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
      icon: Github,
      name: "GitHub",
      url: "https://github.com/bulutkuru",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/bulutkuru",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/bulutkuru",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 bg-black">
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
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">
                          {item.title}
                        </p>
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
              <h3 className="text-xl font-bold text-white mb-6">
                Sosyal Medya
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:border-blue-500 transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
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
            <h3 className="text-2xl font-bold text-white mb-6">
              Mesaj Gönderin
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Proje hakkında konuşmak istiyorum"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              {formStatus === "success" && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-400 text-sm">
                  ✓ Mesajınız başarıyla gönderildi!
                </div>
              )}

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
