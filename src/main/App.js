import React from 'react';
import { useSelector } from 'react-redux'

import Page from '../components/page';

const TESTE = ['link1', 'link2', 'link3'];



const App = () => {
  const hotspots = useSelector(state => state.hotspots);
  console.log(hotspots)

  return (
    <Page navLinks={TESTE} hotspots={hotspots} />
  );
};

export default App;
