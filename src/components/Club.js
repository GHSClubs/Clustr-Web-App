import React from 'react';
import styles from './Club.module.css';

class Club extends React.Component {
  handleClick = () => {
    this.props.onSelect(this.props.name);
  };

  render() {
    const {name, color, tags} = this.props;
    return (
      <button
        className={styles.wrapper}
        style={{backgroundColor: color}}
        onClick={this.handleClick}
      >
        <h2 className={styles.name}>{name}</h2>
        <ul className={styles.tags}>
          {tags.map(tag => <li className={styles.tag} key={tag}>{tag}</li>)}
        </ul>
      </button>
    );
  }
}

export default Club;
