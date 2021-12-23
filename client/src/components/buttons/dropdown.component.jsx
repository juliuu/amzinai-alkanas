import React, { useState, useRef, useEffect } from 'react';

import {
  DropdownContainer,
  DropdownHeader,
  DropdownListContainer,
  DropdownList,
  ListItem,
} from './button.styles';

const Dropdown = ({ options, onFilterChange }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggle = () => setIsOpen(!isOpen);

  const handleChange = (value) => () => {
    setSelected(value.title);
    onFilterChange(value._id);
    setIsOpen(false);
  };

  useEffect(() => {
    const checkIfOutside = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfOutside);
    };
  }, [isOpen]);

  const width = options.reduce((a, b) => (a.title.length > b.title.length ? a : b)).title.length;

  return (
    <DropdownContainer width={width} ref={ref}>
      <DropdownHeader isOpen={isOpen} onClick={toggle}>
        {selected || options[0].title}:
        {!isOpen && <span className="material-icons-outlined">expand_more</span>}
        {isOpen && <span className="material-icons-outlined">expand_less</span>}
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            {options.map((option) => (
              <ListItem key={option._id} onClick={handleChange(option)}>
                {option.title}
              </ListItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
