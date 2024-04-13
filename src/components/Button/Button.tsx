import React from 'react';
//import './Button.css'; // Import CSS file for styling

const Button = ({ label, onClick, disabled, color, size, variant }) => {
  const buttonStyle = {
    backgroundColor: color || 'blue',
    fontSize: size || 'medium',
  };

  return (
    <button
      className={`button ${variant || ''}`}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;