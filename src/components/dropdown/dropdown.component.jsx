import React, { useState } from 'react';

import { DropdownSelector, DropdownOption } from './dropdown.styles';

const Dropdown = ({ options, onFilterChange }) => {
  const [selected, setSelected] = useState(options[0].id);

  const handleChange = (event) => {
    setSelected(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <DropdownSelector value={selected} onChange={handleChange}>
      {options.map((option) => {
        return (
          <DropdownOption key={option.id} value={option.id}>
            {option.title}:
          </DropdownOption>
        );
      })}
    </DropdownSelector>
  );
};

export default Dropdown;
