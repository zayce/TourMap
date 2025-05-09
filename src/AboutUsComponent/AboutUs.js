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
  return (
    <div className="AboutUs-Wrapper">
      <div className="AboutUs-Inner">
        <div className="AboutUs-Title">О Нас</div>

        <div className="AboutUs-TextBlock">
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
            Мы отбираем маршруты вручную, с вниманием к деталям, будто планируем
            поездку для себя. Без шаблонов, без сухих описаний — только
            визуально, стильно и актуально.
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

        <div className="AboutUs-Benefits">
          <div className="Benefit-Item">
            <MapPin className="Benefit-Icon" />
            Локальный туризм — акцент на реальные места
          </div>
          <div className="Benefit-Item">
            <Sparkles className="Benefit-Icon" />
            Удобный дизайн — ничего лишнего
          </div>
          <div className="Benefit-Item">
            <Star className="Benefit-Icon" />
            Подбор по интересам — музеи, природа, дворцы
          </div>
          <div className="Benefit-Item">
            <Users className="Benefit-Icon" />
            Для молодёжи — легко, современно, доступно
          </div>
          <div className="Benefit-Item">
            <HeartHandshake className="Benefit-Icon" />
            Поддержка пользователей — мы открыты к обратной связи
          </div>
          <div className="Benefit-Item">
            <Globe className="Benefit-Icon" />
            Сделано вручную — без шаблонов, с душой
          </div>
        </div>
      </div>
    </div>
  );
};
