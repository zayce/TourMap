import React from "react";
import "./WhyUs.scss";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaRoute, FaMapSigns } from "react-icons/fa";

export const WhyUs = () => {
  const cards = [
    {
      icon: FaUsers,
      title: "Для молодёжи от молодёжи",
      desc: "Сайт сделан молодым программистом специально для тех, кто хочет путешествовать смело и без стресса.",
    },
    {
      icon: FaLightbulb,
      title: "Просто и понятно",
      desc: "Интерфейс максимально лёгкий — справится каждый. Мы убрали всё лишнее, чтобы ты быстро нашёл нужное.",
    },
    {
      icon: FaMapSigns,
      title: "Полезные советы",
      desc: "Помогаем молодым туристам ориентироваться, бронировать и готовиться к путешествию шаг за шагом.",
    },
    {
      icon: FaRoute,
      title: "Туры для духа приключений",
      desc: "Мы отбираем маршруты, которые вдохновляют — для тех, кто хочет исследовать, а не просто отдыхать.",
    },
  ];

  return (
    <motion.div
      className="WhyUs-Wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="WhyUs-Title">Почему именно мы?</div>

      <motion.div
        className="WhyUs-Cards"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        {cards.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            className="WhyUs-Card"
            variants={{
              hidden: { opacity: 0, rotateY: i % 2 === 0 ? -90 : 90, y: 50 },
              visible: { opacity: 1, rotateY: 0, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: i % 2 === 0 ? 10 : -10,
              boxShadow: "0 15px 30px rgba(212, 163, 115, 0.6)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="WhyUs-Icon" />
            <div className="WhyUs-Title">{title}</div>
            <div className="WhyUs-Desc">{desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
