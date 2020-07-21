import React, { useState } from 'react';

import IceCreamWrapper from '../components/ice-cream-wrapper';
import Colors from '../components/colors';
import Moods from '../components/moods';
import { colorsDefault, moodsDefault } from '../initialData';

import './App.css';

function App() {
  const [colors, setColors] = useState(colorsDefault);
  const [moods, setMoods] = useState(moodsDefault);

  const selectColor = colorId => {
    const newColors = colors.map(color => ({
      ...color,
      isSelected: color.id === colorId
    }));

    setColors(newColors);
  };

  const selectMood = moodId => {
    const newMoods = moods.map(mood => ({
      ...mood,
      isSelected: mood.id === moodId
    }));

    setMoods(newMoods);
  };

  const activeColor = colors.find(color => color.isSelected === true).id;
  const activeMood = moods.find(mood => mood.isSelected === true).id;

  return (
    <div className="App">
      <IceCreamWrapper color={activeColor} mood={activeMood} />
      <Colors items={colors} action={selectColor} />
      <Moods items={moods} action={selectMood} />
    </div>
  );
}

export default App;
