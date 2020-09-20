import React from 'react';
import './App.css';
import ClubList from './components/ClubList.js';
import Colors from './Colors.js';

// Random clubs for testing purposes

const clubs = [
  {
    name: '¡MÁS!',
    description: '¡MÁS! is a media club that captures a variety of stories about Mexican American culture, including academics, athletics, politics,  entertainment, and more. ¡MÁS! is an inclusive club for all Gunn students, and all are welcome. Activities include an online newspaper, guest speakers, and other socially-distanced fun.',
    day: 'Wednesday',
    time: '7:00:00 PM',
    color: Colors.VERY_LIGHT_ORANGE,
    tags: ['Wednesday', 'Tier 1', 'New']
  },
  {
    name: '131111 (Creek Cleaning)',
    description: 'A club dedicated for cleaning creeks through independent events and/or our creek segment at Barron Creek near Sofia University (can give volunteer hours). Miscellaneous activities for creek cleaning include removing graffiti, picking up litter, and enjoying being outside. ',
    day: 'Tuesday, Thursday',
    time: '11:40:00 AM',
    color: Colors.ORANGE,
    tags: ['Tuesday', 'Thursday', 'Tier 1', 'New']
  },
  {
    name: '3D Printing and Design Club',
    description: 'The 3D Printing and Design club will allow students to learn about design through CAD and rapid prototyping, as well as creating physical prototypes. ',
    day: 'Wednesday',
    time: '11:40:00 AM',
    color: Colors.PINK,
    tags: ['Wednesday', 'Tier 1', 'New']
  },
  {
    name: 'A Cappella Club',
    description: 'The Gunn A Cappella Club shares the joy of singing to all interested members of the Gunn community! At our weekly meetings, members participate in musical activities and rehearsals to prepare for performances at TEDx, Open Mic and more. During distance learning, we are looking forward to creating exciting music videos and compilations. Join the Titones to make music through the sole power of voices! (And if you can’t carry a tune, be our beatboxer!)',
    day: 'Monday',
    time: '3:10:00 PM',
    color: Colors.BLUE,
    tags: ['Monday', 'Tier 2', 'Returning']
  },
  {
    name: 'Acts of Random Kindness Club',
    description: 'We promote and spread kindness throughout the year at Gunn through multiple events such as Finals Care Packages, Cuties for Cuties, and an Easter Egg Hunt. We are a low pressure and chill club for a good time and to help spread kindness!',
    day: 'Monday',
    time: '3:40:00 PM',
    color: Colors.VERY_LIGHT_ORANGE,
    tags: ['Monday', 'Tier 2', 'Returning']
  },
  {
    name: 'Aeronautical, Naval, and Automotive Association',
    description: 'A club for the discussion of technical details and history of all vehicles that take to the land, air, and sea. Members can sign up to present a topic of their choosing (whether it be a ship, piece of equipment, or design trend) that will be opened up to discussion for other club members. We hope to be holding movie nights and other such events throughout the year.',
    day: 'Monday',
    time: '12:00:00 PM',
    color: Colors.BLUE,
    tags: ['Monday', 'Tier 1', 'Returning']
  },
  {
    name: 'Aeronautics Association',
    description: 'This year, I believe we would mostly teach our club members about physics in space and some more niche topics as well as introduce them to Computer-Aided Design (CAD). We might also guide the members to small projects of their own for them to work on while they are stuck at home.',
    day: 'Thursday',
    time: '11:40:00 AM',
    color: Colors.BLUE,
    tags: ['Thursday', 'Tier 2', 'Returning']
  },
  {
    name: 'AI4Girls ',
    description: '"Join our community of coding and artificial intelligence (AI) enthusiasts! Whether you are just beginning or already experienced, this club will be a place for you to learn, share and create! This year, we will be exploring AI and machine learning through making mobile apps. You will have the opportunity to work on personal apps/AI projects with like-minded peers, and gain the resources and support to prototype your app. If you don’t have experience, don’t worry! we’ll cover topics such as AI, UI design and app coding from the basics. We will also hold discussions for everyone to participate & share resources. Let’s build an inclusive and welcoming community which we can all access and contribute to.  We will also hear from guest speakers, and potentially organize hackathons as a club! The possibilities are endless…"',
    day: 'Thursday',
    time: '11:40:00 AM',
    color: Colors.BLUE,
    tags: ['Thursday', 'Tier 2', 'Returning']
  },
  {
    name: 'American Cancer Society',
    description: 'American Cancer Society aims to educate the Gunn community about cancer and the latest cancer research, organize and host cancer awareness events, and promote cancer volunteer opportunities (such as Relay for Life and Making Strides Against Breast Cancer) with the purpose of purpose of reducing total cancer incidence and mortality by cutting it off at the source through education and support. ACS also plans to have qualified guest speakers visit and deliver informative presentations at meetings. While these are weekly and monthly goals, the club’s long-term goals are to deepen students’ understanding of cancer while keeping them updated on the most recent cancer events and research so that ACS can ignite in students the desire to learn more about cancer and even potentially, inspire them to pursue a career or studies in oncology, as well. ',
    day: 'Wednesday',
    time: '11:40:00 AM',
    color: Colors.BLUE,
    tags: ['Wednesday', 'Tier 1', 'Returning']
  },
  {
    name: 'Amnesty Club',
    description: 'Amnesty Club is the Gunn student group for Amnesty International, a human rights organization founded in 1961. The club participates in nation and world wide human rights campaigns and events as part of the Amnesty organization. Members also discuss and learn about issues and current events pertaining to human rights both modeling after Amnesty and on our own. Join to be a part of the largest human rights group in the country and get involved in some of the world biggest human rights events globally!',
    day: 'Friday',
    time: '11:40:00 AM',
    color: Colors.BLUE,
    tags: ['Friday', 'Tier 1', 'Returning']
  },
  {
    name: 'Arab Culture Club',
    description: 'The goal of the club is to celebrate Arabic culture at Gunn. We will have Arab food, games, and activities to teach members about Arab culture and countries. Meetings will consist of presentations and discussions about different aspects about Arab culture and interactive activities such as cooking and crafts.',
    day: 'Wednesday',
    time: '11:40:00 AM',
    color: Colors.BLUE,
    tags: ['Wednesday', 'Tier 1', 'Returning']
  },
  {
    name: 'Asian Traditional Culture Club',
    description: 'The Asian Traditional Culture club is designed for Gunn Students to increase enthusiasm and enhance the knowledge about the Traditional Asian Culture. We are going to introduce some traditional Asian customs, performing arts, crafts and foods. We will provide opportunities to DIY some crafts and also try delicious Asian Foods!',
    day: 'Wednesday',
    time: '11:40:00 AM',
    color: Colors.BLUE,
    tags: ['Wednesday', 'Tier 2', 'New']
  },
  {
    name: 'ASL Club',
    description: 'ASL Club is an inclusive space where students of all levels of experience can learn and practice American Sign Language (ASL). Come enjoy fun activities, vocabulary-building, and silent conversations! With a bit of weekly commitment, all members will achieve some level of proficiency in ASL by the end of the year. This club is open to anyone interested in mastering this useful, unique skill!',
    day: 'Thursday',
    time: '11:40:00 AM',
    color: Colors.BLUE,
    tags: ['Thursday', 'Tier 1', 'Returning']
  },
  {
    name: 'Best Buddies Club',
    description: 'The Best Buddies Club provides a welcoming environment for students with disabilities at Gunn. Club members can hang out or do group activities with their buddy partner (Futures Students) and strengthen their relationships or build new friendships. Throughout the school year, we will participate in fundraisers and events, such as the Best Buddies Walk!',
    day: 'Friday',
    time: '11:40:00 AM',
    color: Colors.BLUE,
    tags: ['Friday', 'Tier 2', 'Returning']
  },
  {
    name: 'Bikex Club',
    description: 'Our club is focused on supporting the SVBE organization and growing the pastime of biking. We will do so by fundraising and raising awareness of SVBX and what they do. In addition we will create an opportunity for cycling enthusiasts to get together and discuss their interests. As a part of these goals we will plan and carry out events such as bike drives.',
    day: 'Thursday',
    time: '5:30:00 PM',
    color: Colors.BLUE,
    tags: ['Thursday', 'Tier 2', 'New']
  },
  {
    name: 'Biotechnology Club',
    description: 'Biotechnology is the future. The mission of this club is to excite and empower Gunn students to have an impact in the world with biotechnology. The short term goals are teaching students about the applications of biotechnology and the role they can play in this field. The long term objective is to have a thriving club that will help build future scientists who can have an exciting career in the field of biotechnology. We will offer weekly educational series that introduce different aspects of biotechnology through various mediums - videos, interactive discussions and individual/team activities including field trips. We will also invite guest speakers from the industry to share their journey and experiences.',
    day: 'Tuesday, Thursday',
    time: '11:45:00 AM',
    color: Colors.BLUE,
    tags: ['Tuesday', 'Thursday', 'Tier 2', 'New']
  },
  {
    name: 'Black Student Union',
    description: 'The BSU provides an opportunity to  build community, celebrate and learn more about black culture, lifestyle and history. It also addresses issues that are important to black people as well. ',
    day: 'Monday',
    time: '3:30:00 PM',
    color: Colors.BLUE,
    tags: ['Monday', 'Tier 1', 'New']
  },
  {
    name: 'Bridge Club',
    description: 'We play the most fun card game ever: Bridge!',
    day: 'Thursday',
    time: '11:40:00 AM',
    color: Colors.BLUE,
    tags: ['Thursday', 'Tier 1', 'Returning']
  },
  {
    name: 'Canway Youth',
    description: 'Canway youth provides opportunities for adolescents to reach their potential by participating and getting recognized for community service work, achieve higher academic success through subject specific study and classic books reading groups, and balance school and life through social opportunities with other club members.',
    day: 'Wednesday',
    time: '11:40:00 AM',
    color: Colors.BLUE,
    tags: ['Wednesday', 'Tier 1', 'New']
  },
  {
    name: 'Chamber Music Club',
    description: 'The goal of the Chamber Music Club is to bring both members and community joy through group music making. The club activities includes playing/performing music with others in their own groups. Our main activity is presenting and educating about famous musicians, ethnomusicology, and many more. Non-musicians are also welcome as musicians perform to educate one another regardless of proficiency. ',
    day: 'Tuesday',
    time: '11:45:00 AM',
    color: Colors.BLUE,
    tags: ['Tuesday', 'Tier 1', 'Returning']
  },
  {
    name: '',
    description: '',
    day: '',
    time: '',
    color: Colors.BLUE,
    tags: ['', '']
  },

];

var i;
for (i = 4; i < clubs.length-1; i++) {
  if (i%4.0 == 1) {
    clubs[i].color = Colors.ORANGE
  }
  else {
    if (i%4.0 == 2) {
      clubs[i].color = Colors.PINK
    }
    else {
      if (i%4.0 == 3) {
        clubs[i].color = Colors.BLUE
      }
      else {
        if (i%4.0 == 0) {
          clubs[i].color = Colors.VERY_LIGHT_ORANGE
        }
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <ClubList clubs={clubs} />
    </div>
  );
}

export default App;
