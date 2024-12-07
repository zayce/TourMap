import React, { useState, useEffect } from "react";
import "../TourComponent/TourComponent.scss";

export const TourComponent = () => {
    const [attractions, setAttractions] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        // Запрос данных с сервера
        fetch('http://localhost:3000/attractions')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();  // Преобразуем ответ в JSON
          })
          .then(data => {
            console.log('Полученные данные:', data); // Логируем данные
            setAttractions(data);  // Сохраняем данные в состояние
          })
          .catch(err => {
            console.error(err); // Логируем ошибку
            setError('Ошибка при получении данных: ' + err.message);
          });
      }, []);
      

  return (
    <div>
      {attractions.length > 0 ? (
        attractions.map((attraction) => (
          <div key={attraction.id} className="Beta-Block">
            <div className="Beta-Img">
              <img src={attraction.img} className="img" alt={attraction.name} />
            </div>
            <div className="Beta-state">{attraction.state}</div>
            <div className="Beta-Id">{attraction.id}</div>
            <div className="Beta-info">
              <div className="Beta-person">
                <div>{attraction.person}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Загружаем данные...</div> // Сообщение, пока данные не загружены
      )}
    </div>
  );
};
