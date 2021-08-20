import React from 'react';

const Select = ({ options, valueKey, titleKey, allTitle, value, onSelect }) => {
  const changeHandle = (event) => {
    event.preventDefault();
    onSelect(event);
  }

  return (
    <select onChange={changeHandle}>
      <option key={value} value={value}>{allTitle}</option>
      {options.map(option => {
        return (
          <option
            key={option[valueKey]}
            value={option[valueKey]}
            disabled={option.disabled}
          >
            {option[titleKey]}
          </option>
        )
      })}
    </select>
  )
}

export default Select;