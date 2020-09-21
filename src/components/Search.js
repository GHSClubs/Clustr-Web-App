import React from 'react';
import styles from './Search.module.css';

/**
 * The search bar for searching clubs. This doesn't perform the actual
 * search—that is done by <ClubList>; instead, <Search> just signals whenever
 * the user types something into the search box.
 */
class Search extends React.Component {
  handleInput = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <input
        type="search"
        value={this.props.search}
        placeholder="Search clubs"
        className={styles.search}
        onChange={this.handleInput}
      />
    );
  }
}

export default Search;
