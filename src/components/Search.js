import React from 'react';
import styles from './Search.module.css';

class Search extends React.Component {
  handleInput = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <input
        type="search"
        defaultValue={this.props.search}
        placeholder="Search clubs"
        className={styles.search}
        onInput={this.handleInput}
      />
    );
  }
}

export default Search;
