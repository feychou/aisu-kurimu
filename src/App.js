import React, { useState } from 'react';
import { IceCream } from 'react-kawaii';

import Colors from './components/colors/Colors';
//import Moods from './components/moods';
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

  const selectColor = (colorId) => {
    const newColors = colors.map(color => {
      if (color.id === colorId) {
        return {
          ...color,
          isSelected: true
        }
      }

      return {
        ...color,
        isSelected: false
      }
    })

    setColors(newColors)   
  }

  const activeColor = colors.find(color => color.isSelected === true).id;

  return (
    <div className="App">
      <div className="IceCream">
        <IceCream size={400} color={activeColor} />
      </div>
      <Colors items={colors} action={selectColor} />
    </div>
  );
}

export default App;
