import React from 'react';
import './App.css';
import ClubList from './components/ClubList.js';
import Colors from './Colors.js';

const dayColors = {
  Monday: Colors.VERY_LIGHT_ORANGE,
  Tuesday: Colors.ORANGE,
  Wednesday: Colors.PINK,
  Thursday: Colors.DARK_ORANGE,
  Friday: Colors.LIGHT_ORANGE
};

class App extends React.Component {
  state = {
    clubs: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + '/gunn-clubs-2020-21.json')
      .then(response => response.json())
      .then(clubData => {
        this.setState({
          clubs: Object.entries(clubData).map(([name, {new: isNew, desc, day, time, tier}]) => {
            const days = day.split(', ');
            return {
              name,
              description: desc,
              day,
              time,
              color: days.length > 1 ? Colors.BLUE : dayColors[day],
              tags: [
                ...days,
                `Tier ${tier}`,
                isNew ? 'New' : 'Returning'
              ]
            };
          })
        });
      });
  }

  render() {
    return (
      <div className="App">
        <ClubList clubs={this.state.clubs} />
      </div>
    );
  }
}

export default App;
