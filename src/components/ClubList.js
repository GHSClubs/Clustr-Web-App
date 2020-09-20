import React from 'react';
import Button from './Button.js';
import Club from './Club.js';
import ClubInfo from './ClubInfo.js';
import styles from './ClubList.module.css';

class ClubList extends React.Component {
  state = {
    selectedClub: null
  };

  handleSelect = clubName => {
    this.setState({
      selectedClub: clubName
    });
  };

  handleBack = () => {
    this.setState({
      selectedClub: null
    });
  };

  render() {
    const {clubs} = this.props;
    const {selectedClub: selectedClubName} = this.state;
    const selectedClub = clubs.find(club => club.name === selectedClubName);
    return (
      <div className={`${styles.wrapper} ${selectedClub ? styles.clubSelected : ''}`}>
        <div className={styles.list}>
          {clubs.map(({name, color, tags}) => (
            <Club
              key={name}
              name={name}
              color={color}
              tags={tags}
              onSelect={this.handleSelect}
            />
          ))}
        </div>
        {selectedClub && (
          <div className={styles.info}>
            <Button
              className={styles.backBtn}
              onClick={this.handleBack}
            >&lt; Back</Button>
            <ClubInfo
              name={selectedClub.name}
              description={selectedClub.description}
              joinable={false}
              meetingDay={selectedClub.day}
              meetingTime={selectedClub.time}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ClubList;
