import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MapPin,
  Sparkles,
  Users,
  Star,
  HeartHandshake,
  Globe,
} from "lucide-react";
import "../AboutUsComponent/AboutUs.scss";

export const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="AboutUs-Wrapper" data-aos="fade-up">
      <div className="AboutUs-Inner">
        <div className="AboutUs-Title" data-aos="fade-right">
          О Нас
        </div>

        <div className="AboutUs-TextBlock" data-aos="fade-left">
          <div className="AboutUs-TextBlocs">
            <div className="AboutUs-Paragraph">
              Мы — платформа нового поколения для тех, кто хочет открыть
              Азербайджан по-настоящему.
            </div>
            <div className="AboutUs-Paragraph">
              Сайт разработан с нуля молодым энтузиастом, чтобы вдохновить
              молодёжь и сделать внутренний туризм доступнее. Здесь вы найдёте
              только реальные маршруты, живые места и удобную навигацию — всё,
              чтобы путешествовать стало проще и интереснее.
            </div>
            <div className="AboutUs-Paragraph">
              Мы отбираем маршруты вручную, с вниманием к деталям, будто
              планируем поездку для себя. Без шаблонов, без сухих описаний —
              только визуально, стильно и актуально.
            </div>
            <div className="AboutUs-Paragraph">
              Платформа охватывает не только Баку, но и скрытые жемчужины
              Азербайджана — от природы и музеев до дворцов и зоопарков. Хотите
              сбежать на уикенд или найти фотогеничное место? Мы уже подготовили
              лучшие идеи.
            </div>
            <div className="AboutUs-Slogan">
              Твоя страна — твои маршруты. Добро пожаловать в путь.
            </div>
          </div>

          <div className="AboutUs-TextBlock-Img" data-aos="zoom-in">
            <svg
              className="AboutUs-Icon"
              width="48"
              height="48"
              fill="none"
              stroke="#4a3c2f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polygon points="1 6 8 3 16 6 23 3 23 18 16 21 8 18 1 21 1 6" />
              <line x1="8" y1="3" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="21" />
            </svg>
            <svg
              className="AboutUs-Icon"
              width="48"
              height="48"
              fill="none"
              stroke="#4a3c2f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M6 3v2a6 6 0 0 0 12 0V3" />
              <rect x="3" y="6" width="18" height="15" rx="2" />
              <path d="M8 10h8M8 14h8" />
            </svg>
          </div>
        </div>

        <div className="AboutUs-Benefits" data-aos="fade-up">
          <div className="Benefit-Item" data-aos="fade-up" data-aos-delay="100">
            <MapPin className="Benefit-Icon" />
            Локальный туризм — акцент на реальные места
          </div>
          <div className="Benefit-Item" data-aos="fade-up" data-aos-delay="200">
            <Sparkles className="Benefit-Icon" />
            Удобный дизайн — ничего лишнего
          </div>
          <div className="Benefit-Item" data-aos="fade-up" data-aos-delay="300">
            <Star className="Benefit-Icon" />
            Подбор по интересам — музеи, природа, дворцы
          </div>
          <div className="Benefit-Item" data-aos="fade-up" data-aos-delay="400">
            <Users className="Benefit-Icon" />
            Для молодёжи — легко, современно, доступно
          </div>
          <div className="Benefit-Item" data-aos="fade-up" data-aos-delay="500">
            <HeartHandshake className="Benefit-Icon" />
            Поддержка пользователей — мы открыты к обратной связи
          </div>
          <div className="Benefit-Item" data-aos="fade-up" data-aos-delay="600">
            <Globe className="Benefit-Icon" />
            Сделано вручную — без шаблонов, с душой
          </div>
        </div>
      </div>
    </div>
  );
};
