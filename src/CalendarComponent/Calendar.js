import React, { useState } from "react";
import Calendar from "react-calendar";
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.scss";

export const CalendarPicker = () => {
  const [date, setDate] = useState(new Date());

  // Формат даты с днём недели
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatted = date.toLocaleDateString("ru-RU", options);

  // Демо-данные туров по дате
  const tours = {
    "2025-05-22": ["📍 Экскурсия в старый город", "⛰️ Поход в горы"],
    "2025-05-23": ["🛶 Сплав по реке"],
  };

  const dateKey = date.toISOString().slice(0, 10); // "2025-05-22"
  const dayTours = tours[dateKey] || [];

  const handleBooking = () => {
    alert(
      `Вы выбрали дату: ${formatted}\nТуры: ${
        dayTours.join(", ") || "нет туров"
      }`
    );
  };

  return (
    <motion.div
      className="CalendarPicker-Wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="CalendarPicker-inner">
        <div className="CalendarPicker-Block">
          <div className="CalendarPicker-Title">
            <FaRegCalendarAlt className="CalendarPicker-Icon" />
            Выберите дату тура
          </div>

          <div className="CalendarPicker">
            <Calendar
              onChange={setDate}
              value={date}
              locale="ru-RU"
              className="custom-calendar"
              minDate={new Date()} // нельзя выбрать прошлые даты
            />
          </div>

          <div className="CalendarPicker-Date">
            Вы выбрали:
            <div className="CalendarPicker-Date-Change">{formatted}</div>
          </div>

          {dayTours.length > 0 ? (
            <div className="CalendarPicker-Tours">
              <h4>Доступные туры:</h4>
              <ul>
                {dayTours.map((tour, i) => (
                  <li key={i}>{tour}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="CalendarPicker-NoTours">
              На эту дату туров пока нет.
            </div>
          )}

          <button className="CalendarPicker-BookBtn" onClick={handleBooking}>
            Забронировать тур
          </button>
        </div>
      </div>
    </motion.div>
  );
};
