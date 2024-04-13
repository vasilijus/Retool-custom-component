import React from 'react';
import { type FC } from 'react'
import ReactDOM from 'react-dom';
import { Retool } from '@tryretool/custom-component-support'

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

  return (
    <div className="test" style={{ border: showBorder ? "1px solid black" : "",}}>
      <h2>Hello {name}!</h2>
      <div>How is your day, {name}?</div>
    </div>
  )
}


export { default as Button } from './components/Button/Button';
export { default as Input } from './components/Input/Input';
