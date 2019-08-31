import React from 'react';
import Page from './components/page';

const TESTE = ['link1', 'link2', 'link3'];

const HOTSPOTS = ['hotspot1', 'hotspot2', 'hotspot3', 'hotspot4'];

const App = () => (
  <Page navLinks={TESTE} hotspots={HOTSPOTS} />
);

export default App;
