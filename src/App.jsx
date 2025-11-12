import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Globe, Code2, Phone, MapPin, ExternalLink, GraduationCap } from 'lucide-react';

const PROFILE = {
  name: 'Civan Şanlı',
  tagline: 'Yazılıma tutkulu, gelişmeye açık bir lise öğrencisi ve basketbol oyuncusuyum.',
  location: 'İstanbul, Türkiye',
  email: 'civan@aivon.com',
  phone: '—',
  about:
    'Ben Civan, yazılım ve teknolojiye meraklı bir lise öğrencisiyim. Her gün kendimi geliştirmek için yeni şeyler öğreniyor, küçük projelerle deneyim kazanıyorum. Hedefim, iyi bir üniversiteden mezun olup profesyonel bir yazılımcı olmak.',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/civan-%C5%9Fanl%C4%B1-8146b0268/', icon: <Linkedin size={18} /> },
    { label: 'E‑posta', href: 'mailto:civan@aivon.com', icon: <Mail size={18} /> },
  ],
  skills: ['HTML', 'JavaScript', 'React'],
  education: [{ school: 'Lise (12. sınıf)', detail: 'YKS sayısal hazırlık', year: '2025' }],
  projects: [
    {
      title: 'WhatsApp Chatbot Tasarımı',
      description:
        'Farklı işletmelere destek vermek amacıyla tasarladığım yapay zekâ tabanlı bir WhatsApp chatbot projesi. Otomatik mesaj yanıtı, müşteri etkileşimi ve bilgi akışı yönetimi gibi özellikler içerir.',
      stack: ['Node.js', 'API', 'Webhook'],
      link: '#',
    },
    {
      title: 'Website Designer',
      description:
        'Modern ve kullanıcı dostu web arayüzleri tasarladığım kişisel proje. React, TailwindCSS ve temel UI/UX prensipleriyle şık sayfalar oluşturdum.',
      stack: ['React', 'TailwindCSS'],
      link: '#',
    },
  ],
};

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-5xl mx-auto px-6 md:px-8 py-12">
    <motion.h2
      className="text-2xl md:text-3xl font-bold mb-6"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm mr-2 mb-2">
    {children}
  </span>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 md:px-8 h-16">
          <a href="#hero" className="font-semibold">{PROFILE.name}</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">Hakkımda</a>
            <a href="#projects" className="hover:opacity-70">Projeler</a>
            <a href="#skills" className="hover:opacity-70">Beceriler</a>
            <a href="#education" className="hover:opacity-70">Eğitim</a>
            <a href="#contact" className="hover:opacity-70">İletişim</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Merhaba, ben {PROFILE.name.split(' ')[0]} 👋
            </h1>
            <p className="mt-3 text-lg text-gray-700">{PROFILE.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-2xl px-5 py-2.5 border font-medium inline-flex items-center gap-2 hover:shadow-sm"
              >
                <Code2 size={18} /> Projelerime göz at
              </a>
              <a
                href="/cv.pdf"
                className="rounded-2xl px-5 py-2.5 border font-medium inline-flex items-center gap-2 hover:shadow-sm"
              >
                <Download size={18} /> Özgeçmiş (PDF)
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1"><MapPin size={16}/> {PROFILE.location}</span>
              <span className="inline-flex items-center gap-1"><Phone size={16}/> {PROFILE.phone}</span>
              <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${PROFILE.email}`}><Mail size={16}/> {PROFILE.email}</a>
            </div>
            <div className="mt-4 flex items-center gap-3">
              {PROFILE.socials.map((s, i) => (
                <a key={i} href={s.href} className="inline-flex items-center gap-2 text-sm border rounded-xl px-3 py-1.5 hover:shadow-sm">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="aspect-square rounded-3xl border bg-gradient-to-br from-gray-50 to-white flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <span className="text-6xl">🧠</span>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="Hakkımda">
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">{PROFILE.about}</p>
        </div>
      </Section>

      <Section id="projects" title="Öne Çıkan Projeler">
        <div className="grid md:grid-cols-3 gap-6">
          {PROFILE.projects.map((p, idx) => (
            <motion.article
              key={idx}
              className="border rounded-2xl p-5 hover:shadow-sm bg-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{p.description}</p>
              <div className="mt-3">
                {p.stack.map((t, i) => (
                  <Pill key={i}>{t}</Pill>
                ))}
              </div>
              <a href={p.link} className="inline-flex items-center gap-1 text-sm mt-4 hover:underline">
                Canlı Önizleme <ExternalLink size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Beceriler">
        <div className="flex flex-wrap">
          {PROFILE.skills.map((s, i) => (
            <Pill key={i}>{s}</Pill>
          ))}
        </div>
      </Section>

      <Section id="education" title="Eğitim">
        <div className="space-y-4">
          {PROFILE.education.map((e, i) => (
            <div key={i} className="border rounded-2xl p-5 bg-white">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <GraduationCap size={16}/> <span>{e.year}</span>
              </div>
              <div className="mt-1 font-semibold">{e.school}</div>
              <div className="text-sm text-gray-700">{e.detail}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="İletişim">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-5 bg-white">
            <h3 className="font-semibold mb-3">Hızlı Bilgiler</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2"><Globe size={16}/> Portföy: <a className="hover:underline" href="#">civansanli.dev</a></li>
              <li className="flex items-center gap-2"><Mail size={16}/> E‑posta: <a className="hover:underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
              <li className="flex items-center gap-2"><Phone size={16}/> Telefon: {PROFILE.phone}</li>
              <li className="flex items-center gap-2"><MapPin size={16}/> Lokasyon: {PROFILE.location}</li>
            </ul>
          </div>
          <form className="border rounded-2xl p-5 bg-white">
            <h3 className="font-semibold mb-3">Bana yaz</h3>
            <div className="grid gap-3 text-sm">
              <input className="border rounded-xl px-3 py-2" placeholder="Ad Soyad" />
              <input type="email" className="border rounded-xl px-3 py-2" placeholder="E‑posta" />
              <textarea className="border rounded-xl px-3 py-2 min-h-[120px]" placeholder="Mesaj" />
              <button type="button" className="rounded-xl px-4 py-2 border hover:shadow-sm font-medium">Gönder</button>
              <p className="text-xs text-gray-500">(Demo form – canlıya taşırken Formspree, Getform veya kendi backend'inle bağlayabilirsin.)</p>
            </div>
          </form>
        </div>
      </Section>

      <footer className="border-t py-10 mt-8">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-sm text-gray-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {PROFILE.name}. Tüm hakları saklıdır.</span>
          <div className="flex gap-3">
            {PROFILE.socials.map((s, i) => (
              <a key={i} href={s.href} className="inline-flex items-center gap-1 border rounded-xl px-3 py-1.5 hover:shadow-sm">
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
