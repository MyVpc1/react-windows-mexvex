import React, { useRef } from "react";
import { Link } from "react-router-dom";

const InputSearchBox = (props) => {
  const inputRef = useRef();
  const suggestRef = useRef();

  const [suggestData, setSuggestData] = React.useState(props.suggest);

  const _onChange = (e) => {
    let listSuggest = suggestRef.current;
    if(!e.target.value || !listSuggest.hasChildNodes()) {
      listSuggest.className = "";
    } else {
      listSuggest.className = "show";
    }
    props.onChange();
  }

  return (
    <div className="app-input-search-box" title={props.tooltip}>
      <input className="app-input-text"
        ref={inputRef}
        style={{ width: props.width }}
        type="search"
        name={props.name}
        value={props.value}
        onClick={props.onClick}
        onKeyUp={props.onKeyUp}
        onKeyDown={props.onKeyDown}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={(e) => {
          _onChange(e)
          const lst_data = props.suggest.filter(data => {
            return data.label.toLowerCase().includes(e.target.value.toLowerCase());
          });
          setSuggestData(lst_data);
        }}
      />
      <ul ref={suggestRef} style={{ width: props.width }}>
        {suggestData.map((item) => (
          <li
            className="option"
            key={item.label}>
              <Link to={item.link} onClick={item.onClick}>
                {item.icon}{item.label}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

InputSearchBox.defaultProps = {
  placeholder: "Search here..",
  onChange: () => {},
  suggest: []
}

export default InputSearchBox;