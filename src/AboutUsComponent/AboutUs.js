import React, { useEffect } from "react";
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
import { useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();

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
          {t("aboutUs")}
        </div>

        <div className="AboutUs-TextBlock" data-aos="fade-left">
          <div className="AboutUs-TextBlocs">
            <div className="AboutUs-Paragraph">{t("aboutUsFirstParagrf")}</div>
            <div className="AboutUs-Paragraph">{t("aboutUsSecondParagrf")}</div>
            <div className="AboutUs-Paragraph">{t("aboutUsThirdParagrf")}</div>
            <div className="AboutUs-Paragraph">{t("aboutUsFourParagrf")}</div>
            <div className="AboutUs-Slogan">{t("aboutUsFiveParagrf")}</div>
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
            {t("aboutUsFirstItem")}
          </div>
          <div className="Benefit-Item" data-aos="fade-up" data-aos-delay="200">
            <Sparkles className="Benefit-Icon" />
            {t("aboutUsSecondItem")}
          </div>
          <div className="Benefit-Item" data-aos="fade-up" data-aos-delay="300">
            <Star className="Benefit-Icon" />
            {t("aboutUsThirdItem")}
          </div>
          <div className="Benefit-Item" data-aos="fade-up" data-aos-delay="400">
            <Users className="Benefit-Icon" />
            {t("aboutUsFourItem")}
          </div>
          <div className="Benefit-Item" data-aos="fade-up" data-aos-delay="500">
            <HeartHandshake className="Benefit-Icon" />
            {t("aboutUsFiveItem")}
          </div>
          <div className="Benefit-Item" data-aos="fade-up" data-aos-delay="600">
            <Globe className="Benefit-Icon" />
            {t("aboutUsSixItem")}
          </div>
        </div>
      </div>
    </div>
  );
};
