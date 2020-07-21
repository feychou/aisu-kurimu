import React, { useState } from 'react';

import IceCreamWrapper from './components/ice-cream-wrapper/IceCreamWrapper';
import Colors from './components/colors/Colors';
import './App.css';


const colorsDefault = [
  {
    id: '#F6A7DC',
    isSelected: true
  },
  {
    id: '#F7F25D',
    isSelected: false
  },
  {
    id: '#90F9E8',
    isSelected: false
  },
  {
    id: '#9DE295',
    isSelected: false
  },
  {
    id: '#F6B672',
    isSelected: false
  },
  {
    id: '#DFABF2',
    isSelected: false
  },
  {
    id: '#C8C6EF',
    isSelected: false
  },
  {
    id: '#B2E2F7',
    isSelected: false
  }
]

function App() {
  const [colors, setColors] = useState(colorsDefault);

  const selectColor = colorId => {
    const newColors = colors.map(color => {
      return {
        ...color,
        isSelected: color.id === colorId
      };
    });

    setColors(newColors);
  };

  const activeColor = colors.find(color => color.isSelected === true).id;

  return (
    <div className="App">
      <IceCreamWrapper color={activeColor} />
      <Colors items={colors} action={selectColor} />
    </div>
  );
}

export default App;
