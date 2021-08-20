import React from 'react';

const Select = ({ options, valueKey, titleKey, allTitle, value, onSelect }) => {

  return (
    <select onChange={onSelect}>
      <option key={value} value={value}>{allTitle}</option>
      {options.map(option => {
        return (
          <option key={option[valueKey]} value={option[valueKey]}>
            {option[titleKey]}
          </option>
        )
      })}
    </select>
  )
}

export default Select;