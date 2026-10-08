import chatbotImage from "./assets/chatbot.png";
import talklabImage from "./assets/talklab.png";
import bookingImage from "./assets/bookinglapangan.png";
import siakadImage from "./assets/siakad.png";
import fullStackCertificate from "./assets/sertifikat-fullstack.jpeg";
import wireframingCertificate from "./assets/sertifikat-wireframing.png";

export const projects = [
  {
    title: "Bot Asisten AI",
    desc: "Chatbot untuk menjawab pertanyaan teknis dan membantu menghasilkan potongan kode.",
    tech: ["Python", "HTML", "JavaScript"],
    image: chatbotImage,
    alt: "Tampilan Bot Asisten AI",
  },
  {
    title: "TalkLab Edukasi",
    desc: "Platform edukasi daring untuk membantu pengguna mengembangkan kemampuan berbicara.",
    tech: ["JavaScript", "CSS", "HTML"],
    image: talklabImage,
    alt: "Tampilan platform TalkLab Edukasi",
  },
  {
    title: "Booking Lapangan",
    desc: "Aplikasi mobile untuk memudahkan pemesanan lapangan futsal secara daring.",
    tech: ["Flutter", "Dart", "Supabase"],
    image: bookingImage,
    alt: "Tampilan aplikasi Booking Lapangan",
  },
  {
    title: "SIAKAD Universitas",
    desc: "Sistem informasi akademik untuk mengelola data mahasiswa, kurikulum, dan nilai.",
    tech: ["PHP", "MySQL", "HTML"],
    image: siakadImage,
    alt: "Tampilan SIAKAD Universitas",
  },
];

export const certificates = [
  {
    title: "Full-Stack Web Development",
    issuer: "WebMedia Training Center",
    date: "19 Mei - 23 Juni 2025",
    image: fullStackCertificate,
    alt: "Sertifikat Full-Stack Web Development dari WebMedia Training Center",
  },
  {
    title: "Wireframing for Website",
    issuer: "MySkill - E-Learning",
    date: "11 Mei 2025",
    image: wireframingCertificate,
    alt: "Sertifikat Wireframing for Website dari MySkill",
  },
];
