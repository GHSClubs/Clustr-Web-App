import React from 'react';
import Button from './Button.js';
import Club from './Club.js';
import ClubInfo from './ClubInfo.js';
import Colors from '../Colors.js';
import FilterButton from './FilterButton.js';
import Search from './Search.js';
import styles from './ClubList.module.css';

// https://stackoverflow.com/a/9310752
function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const allFilters = [
  {name: 'Monday', color: Colors.PINK},
  {name: 'Tuesday', color: Colors.PINK},
  {name: 'Wednesday', color: Colors.PINK},
  {name: 'Thursday', color: Colors.PINK},
  {name: 'Friday', color: Colors.PINK},
  {name: 'Tier 1', color: Colors.VERY_LIGHT_ORANGE},
  {name: 'Tier 2', color: Colors.LIGHT_ORANGE},
  {name: 'Tier 3', color: Colors.ORANGE},
  {name: 'New', color: Colors.BLUE},
  {name: 'Returning', color: Colors.BLUE}
];

class ClubList extends React.Component {
  state = {
    selectedClub: null,
    search: '',
    filters: []
  };

  handleSelectClub = clubName => {
    // this.setState({
    //   selectedClub: clubName
    // });
  };

  handleBack = () => {
    this.setState({
      selectedClub: null
    });
  };

  handleSelectFilter = filterName => {
    if (this.state.filters.includes(filterName)) {
      this.setState({
        filters: this.state.filters.filter(filter => filter !== filterName)
      });
    } else {
      this.setState({
        filters: [filterName, ...this.state.filters]
      });
    }
  };

  handleSearch = search => {
    this.setState({ search });
  };

  render() {
    const {clubs} = this.props;
    const {selectedClub: selectedClubName, search, filters} = this.state;
    const selectedClub = clubs.find(club => club.name === selectedClubName);
    const searchFilter = search ? new RegExp(escapeRegExp(search), 'ig') : null;
    const filteredClubs = clubs.filter(club => {
      if (filters.length > 0) {
        // Hide clubs that do not have a selected filter
        if (filters.some(filter => !club.tags.includes(filter))) {
          return false;
        }
      }
      if (searchFilter) {
        // Hide clubs that do not have the search query in its name nor description
        if (!searchFilter.test(club.name) && !searchFilter.test(club.description)) {
          return false;
        }
      }
      return true;
    });
    return (
      <div className={`${styles.wrapper} ${selectedClub ? styles.clubSelected : ''}`}>
        <div className={styles.list}>
          <h1> Gunn Clubs </h1> 
          <div className={styles.searchWrapper}>
            <Search
              search={search}
              onChange={this.handleSearch}
            />
            <div className={styles.filters}>
              Filter by:
              {allFilters.map(({name, color}) => (
                <FilterButton
                  key={name}
                  name={name}
                  color={color}
                  selected={this.state.filters.includes(name)}
                  onSelect={this.handleSelectFilter}
                />
              ))}
            </div>
          </div>
          {filteredClubs.map(({name, description, day, time, color, tags, presidents, zoomLink}) => (
              <Club
                key={name}
                name={name}
                color={color}
                tags={tags}
                description={description}
                presidents={presidents}
                zoomLink={zoomLink}
                meetingDay={day}
                meetingTime={time}
                searchFilter={searchFilter}
                filters={filters}
                onSelect={this.handleSelectClub}
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
