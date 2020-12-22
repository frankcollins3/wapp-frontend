import React from 'react';
import './panel.css'
import Trailing from '../Trailing'

export default function Panel() {
  return (
    <div className="panel-container">
      <div>Next reminder</div>
      <div><Trailing /></div>
      <div>some other shit idk</div>
    </div>
  );
}
