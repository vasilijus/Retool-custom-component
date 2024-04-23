import React from 'react';
import { type FC } from 'react'
import ReactDOM from 'react-dom';
import { Retool } from '@tryretool/custom-component-support'

import Button from './components/Button/Button'
import './styles/styles.css';

export const HelloWorld: FC = () => {
  const [name, _setName] = Retool.useStateString({
    name : 'name',
    initialValue : 'Hello World',
    label: 'label'
  })
  const [showBorder, _setShowBorder] = Retool.useStateBoolean({
    name: 'showBorder',
    initialValue: false,
    label: "Show Border",
    inspector: "checkbox"
  })

//  const initialValue = [{ id: 1, value: 'Initial Value' }];
  const [selectedOption, setSelectedOption] = Retool.useStateEnumeration({
    name: 'color',
    enumDefinition: ['red', 'green', 'blue'],
    initialValue: 'red',
    enumLabels: {
      red: 'Red Color',
      green: 'Green Color',
      blue: 'Blue Color'
    },
    inspector: 'select',
    description: 'Select a color',
    label: 'Color'
  });

  return (
    <div className="test" style={{ 
      border: showBorder ? "1px solid black" : "",
      background: selectedOption ? selectedOption : "",
    }}>
    <button />
      <h2>Hello {name}!</h2>
      <div>How's yousr day, {name}?</div>
      <div>
      {/* Render your component UI here */}
      <label>{selectedOption}</label>
      <br />
      <br/>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
      <button />
        <option value="red">Red Color</option>
        <option value="green">Green Color</option>
        <option value="blue">Blue Color</option>
      </select>
    </div>
    </div>
  )
}


export { default as Button } from './components/Button/Button';
export { default as Input } from './components/Input/Input';
