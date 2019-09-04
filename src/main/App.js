import React from 'react';
import { useSelector } from 'react-redux'

import Page from '../components/page';

const TESTE = ['Link fake1', 'Link fake2', 'Link fake3', 'Link fake4'];

const App = () => {
  const hotspots = useSelector(state => state.hotspots.hotspotList);

  return (
    <Page navLinks={TESTE} hotspotList={hotspots} />
  );
};

export default App;
