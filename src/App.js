import React from 'react';
import './App.css';
import SolarSystem from './components/SolarSystem/SolarSystem';
import Header from './components/Header/Header';
import Missions from './components/Missions/Missions';

import GlobalStyle from './styles/Global';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <section className="content">
          <Header />
          <SolarSystem />
          <Missions />
          <GlobalStyle />
        </section>
      </main>
    );
  }
}

export default App;
