import "./index.css";
import { useEffect, useState } from "react";
import searchIcon from "./assets/search.png";
import closeIcon from "./assets/close-window.png";
const ReactSearchBox = ({
  data = [],
  handleChange,
  searchLabel = "Search",
  styles,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [receivedData, setReceivedData] = useState([]);
  useEffect(() => {
    setReceivedData(data);
  }, []);

  const handleSearchChange = (e) => {
    let { value } = e.target;
    setSearchInput(value);
    let result = receivedData?.filter((item) => {
      const nameRes = item?.name?.toLowerCase().includes(value?.toLowerCase());
      const valueRes = item?.value
        ?.toLowerCase()
        ?.includes(value?.toLowerCase());
      return nameRes || valueRes;
    });
    handleChange(result);
  };
  return (
    <div className="search-container">
      <input
        className="rsi-input"
        style={styles}
        type="text"
        placeholder={searchLabel}
        value={searchInput}
        onChange={handleSearchChange}
      />
      {searchInput && (
        <img
          className="rsi-close zoom-anim"
          src={closeIcon}
          alt="close"
          onClick={() => {
            setSearchInput("");
            handleChange(receivedData);
          }}
        />
      )}
      <img className="rsi-img" src={searchIcon} alt="search" />
    </div>
  );
};

export default ReactSearchBox;
