import React from 'react';
import styles from './Club.module.css';

class Club extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    // this.props.onSelect(this.props.name);
    this.setState({
      open: !this.state.open
    })
  };

  render() {
    const {name, color, tags, description, meetingDay, meetingTime} = this.props;
    const {open} = this.state;
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
        {open && <>
          <p className={styles.field}>{description}</p>
          <p className={styles.field}>Time: {meetingTime}</p>
        </>}
      </button>
    );
  }
}

export default Club;
