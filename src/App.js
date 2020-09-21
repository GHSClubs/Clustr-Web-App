import React from 'react';
import './App.css';
import ClubList from './components/ClubList.js';
import Colors from './Colors.js';

class App extends React.Component {
  state = {
    clubs: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + '/gunn-clubs-2020-21.json')
      .then(response => response.json())
      .then(clubData => {
        const clubs = Object.entries(clubData).map(([name, {new: isNew, desc, day, time, tier, president, link}]) => {
          const days = day.split(', ');
          return {
            name,
            description: desc,
            day,
            time,
            tags: [
              ...days,
              `Tier ${tier}`,
              isNew ? 'New' : 'Returning'
            ],
            presidents: president,
            zoomLink: link
          };
        });
        for (let i = 0; i < clubs.length-1; i++) {
          if (i%4.0 === 1) {
            clubs[i].color = Colors.ORANGE
          }
          else {
            if (i%4.0 === 2) {
              clubs[i].color = Colors.PINK
            }
            else {
              if (i%4.0 === 3) {
                clubs[i].color = Colors.BLUE
              }
              else {
                if (i%4.0 === 0) {
                  clubs[i].color = Colors.VERY_LIGHT_ORANGE
                }
              }
            }
          }
        }
        this.setState({ clubs });
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
