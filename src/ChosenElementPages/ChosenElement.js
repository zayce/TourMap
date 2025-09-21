import { useState } from "react";
import { useMyContext } from "../UseContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./ChosenElement.scss";

export const SearchInput = () => {
  const { traveled } = useMyContext();
  const [value, setValue] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const itemsPerPage = 10;

  const suggestions = traveled.filter((item) =>
    t(item.name).toLowerCase().includes(value.toLowerCase())
  );

  const handleSelect = (item) => {
    setValue(t(item.name));
    navigate(`/desc/${item.id}`);
  };

  const handleReset = () => {
    setValue("");
    setPage(0);
  };

  const startIndex = page * itemsPerPage;
  const paginated = suggestions.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(suggestions.length / itemsPerPage);

  return (
    <div className="Wrapper">
      <div className="Inner">
        <input
          type="text"
          placeholder="Введите название..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setPage(0);
          }}
        />
        {value && (
          <button className="ResetButton" onClick={handleReset}>
            Сброс
          </button>
        )}
      </div>

      {value && suggestions.length > 0 && (
        <div className="Suggestions">
          <div className="Suggestions-grid">
            {paginated.map((item) => (
              <div
                key={item.id}
                className="SuggestionItem"
                onClick={() => handleSelect(item)}
              >
                {t(item.name)} — <span className="city">{t(item.city)}</span>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="Pagination">
              <button
                disabled={page === 0}
                onClick={() => setPage((p) => p - 1)}
              >
                ◀ Назад
              </button>
              <span>
                {page + 1} / {totalPages}
              </span>
              <button
                disabled={page === totalPages - 1}
                onClick={() => setPage((p) => p + 1)}
              >
                Вперёд ▶
              </button>
            </div>
          )}
        </div>
      )}

      {value && suggestions.length === 0 && (
        <p className="NotFound">Ничего не найдено</p>
      )}
    </div>
  );
};
