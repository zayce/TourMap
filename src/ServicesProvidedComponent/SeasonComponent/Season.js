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
        <div className="Season-Title">
          {postId === "1"
            ? "Куда стоит съездить летом?"
            : postId === "2"
            ? "Куда стоит съездить весной/осенью?"
            : "Куда стоит съездить зимой?"}
        </div>
        <div className="Season-Imgs-Grups">
          {filteredSeason.map((place) => (
            <>
              <div className="Season-Big-Img" key={place.id}>
                <img src={place.img} className="Big" />
                <div className="Season-Overlay">{place.name}</div>
              </div>
            </>
          ))}
          {filteredSeason.map((element) => (
            <div className="Season-Titles" key={element.id}>
              {element.title}
            </div>
          ))}
          <div className="Season-Blocks">
            <div className="Season-Block">
              <div className="Season-Title"></div>
              <div className="Season-desc-Block">
                <div className="Season-desc-Text"></div>
                <div className="Season-desc-img">
                  <img />
                </div>
              </div>
            </div>
            <div className="Season-Block">
              <div className="Season-Title"></div>
              <div className="Season-desc-Block">
                <div className="Season-desc-Text"></div>
                <div className="Season-desc-img">
                  <img />
                </div>
              </div>
            </div>
            <div className="Season-Block">
              <div className="Season-Title"></div>
              <div className="Season-desc-Block">
                <div className="Season-desc-Text"></div>
                <div className="Season-desc-img">
                  <img />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
