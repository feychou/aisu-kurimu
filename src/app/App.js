import React, { useState } from 'react';

import IceCreamWrapper from '../components/ice-cream-wrapper/IceCreamWrapper';
import Colors from '../components/colors/Colors';
import Moods from '../components/moods/Moods';
import { colorsDefault, moodsDefault } from '../initialData';

import './App.css';

function App() {
  const [colors, setColors] = useState(colorsDefault);
  const [moods, setMoods] = useState(moodsDefault);

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
      <Moods items={moods} />
    </div>
  );
}

export default App;
