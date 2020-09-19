import React from 'react';
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
        tags={['Monday', 'Tier 1']}
      />
      <Club
        name="Beat Production Club"
        color={Colors.ORANGE}
        tags={['Tuesday', 'Thursday', 'Tier 3']}
      />
      <Club
        name="Chess Club"
        color={Colors.PINK}
        tags={['Wednesday', 'Tier 2']}
      />
      <Club
        name="Service Club"
        color={Colors.BLUE}
      />
    </div>
  );
}

export default App;
