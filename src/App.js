import React from 'react';
import logo from './logo.svg';
import './App.css';
import Club from './components/Club.js';
import Colors from './Colors.js';

function App() {
  return (
    <div className="App">
      {/* Random clubs for testing purposes */}
      <Club
        name="Basketball Club"
        color={Colors.LIGHT_ORANGE}
      />
      <Club
        name="Beat Production Club"
        color={Colors.ORANGE}
      />
      <Club
        name="Chess Club"
        color={Colors.PINK}
      />
      <Club
        name="Service Club"
        color={Colors.BLUE}
      />
    </div>
  );
}

export default App;
