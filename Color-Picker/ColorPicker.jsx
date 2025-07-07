import React, { useState } from "react";
import "./ColorPicker.css"; // Importing CSS

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1 className="title">🎨 Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p className="color-code">Selected Color: <span>{color}</span></p>
      </div>
      <label className="label">Choose a color:</label>
      <input type="color" value={color} onChange={handleColorChange} className="color-input" />
    </div>
  );
}

export default ColorPicker;
