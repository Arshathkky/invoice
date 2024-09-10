import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dropdown = ({ items = [] ,head}) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  return (
    <div className="dropdown-container">
      <select className="dropdown-select" onChange={handleChange}>
        <option value="">{head}</option>
        {items.length > 0 ? (
          items.map((item, index) => (
            <option key={index} value={item.path}>
              {item.label}
            </option>
          ))
        ) : (
          <option>No options available</option>
        )}
      </select>
    </div>
  );
};

export default Dropdown;
