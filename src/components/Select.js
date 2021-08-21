import React from 'react';

const Select = ({ options, valueKey, titleKey, allTitle, value, onSelect }) => {
  const changeHandle = (event) => {
    event.preventDefault();
    onSelect(event);
  }

  return (
    <select value={value} onChange={changeHandle}>
      <option key={'all'} value={'all'} >{allTitle}</option>
      {options.map(option => {
        let isDisabled
        if (value === String(option[valueKey])) {
          isDisabled = false;
        } else if (value !== 'all') {
          isDisabled = true;
        } else {
          isDisabled = option.disabled
        }

        return (
          <option
            key={option[valueKey]}
            value={option[valueKey]}
            disabled={isDisabled}
          >
            {option[titleKey]}
          </option>
        )
      })}
    </select>
  )
}

export default Select;