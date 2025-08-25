import { useMyContext } from "../../UseContext";
import { useParams } from "react-router-dom";
import "./Season.scss";

export const Season = () => {
  const { SeasonData, language, translations } = useMyContext();
  const { postId } = useParams();

  const filteredSeason = SeasonData.filter(
    (place) => place.postId === parseInt(postId)
  );

  return (
    <div className="Season-Wrapper">
      <div className="Season-Inner">
        {/* Заголовок с переводом */}
        <div className="Season-Title">
          {translations.seasonTitles?.[postId] || ""}
        </div>

        <div className="Season-Imgs-Grups">
          {filteredSeason.map((place) => (
            <div className="Season-Big-Img" key={place.id}>
              <img src={place.img} alt={place.name} className="Big" />
              <div className="Season-Overlay">{place.name}</div>
            </div>
          ))}

          {filteredSeason.map((element) => (
            <div className="Season-Titles" key={element.id}>
              {element.title}
            </div>
          ))}

          {/* Пример заполнения блоков с мультиязычностью */}
          <div className="Season-Blocks">
            {filteredSeason.map((element) => (
              <div className="Season-Block" key={`block-${element.id}`}>
                <div className="Season-Title">
                  {translations.seasonBlocksTitle?.[element.id] || ""}
                </div>
                <div className="Season-desc-Block">
                  <div className="Season-desc-Text">
                    {translations.seasonBlocksDesc?.[element.id] || ""}
                  </div>
                  <div className="Season-desc-img">
                    <img src={element.blockImg} alt={element.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
