import React from 'react';
import './App.css';
import ClubList from './components/ClubList.js';
import Colors from './Colors.js';

// Random clubs for testing purposes
const clubs = [
  {
    name: 'Basketball Club',
    description: 'Over the course of the year, we will learn about and develop computational techniques to analyze various major league sports. We will also go over some of the cutting edge tech that is used to give athletes a competitive advantage in the sports industry. Moreover, our club will invite industry experts from startups and major league sports teams to talk about their experiences in the fascinating field of Sports Analytics. At the end of the year, our aim is to participate in open source data science competitions (such as Kaggles)',
    day: 'Friday',
    time: '11:40:00 AM',
    color: Colors.LIGHT_ORANGE,
    tags: ['Friday', 'Tier 1']
  },
  {
    name: 'Beat Production Club',
    description: 'The Beat Production Club is the best jam avenue for students at Gunn; this club is open to all musicians: beat-makers, instrumentalists, vocalists, and songwriters, who will collaborate together and have a chance to get involved in the complete production of music. Non musician music enthusiasts are welcome too! The production environment is not stressful and students can bring creative ideas! Several genres will be welcomed and there will be a focus on hip-hop, R&B, jazz, and fusion! Students will have access to guest speaker events and find cool opportunities to enrich their musical journeys. Hop into the studio, record a trumpet lick, write some bars, program drums, add 808s and drop the tracks!',
    day: 'Monday',
    time: '3:10:00 PM',
    color: Colors.ORANGE,
    tags: ['Monday', 'Tier 1']
  },
  {
    name: 'Chess Club',
    description: 'The Gunn Chess Club is a club that will act as a network for Gunn high school students who enjoy video games, focusing on improving members and encouraging students to get into more serious competition while playing with and against each other. Specifically during meetings, we will watch and discuss professional eSports matches. As a club, we hope to remove the negative prejudices and stereotypes around video games and showcase the benefits that video games can bring, such as a sense of community, through supporting charities through methods such as donating tournament prize pools.',
    day: 'Wednesday',
    time: '11:40:00 AM',
    color: Colors.PINK,
    tags: ['Wednesday', 'Tier 2']
  },
  {
    name: 'Service Club',
    description: 'The Service Club is a community service club that works with the community organization, YCS, and the international program, Interact, to try and improve our community. Some of the events we put on are Service Day, Service Fair, Service Trip, and an Open Mic. We also regularly update club members on different community service opportunities as we are notified about them.',
    day: 'Monday',
    time: '12:35:00 PM',
    color: Colors.BLUE,
    tags: ['Monday', 'Tier 3']
  }
];

function App() {
  return (
    <div className="App">
      <ClubList clubs={clubs} />
    </div>
  );
}

export default App;
