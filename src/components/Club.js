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

  handleLinkClick = e => {
    e.stopPropagation();
  };

  render() {
    const {name, color, tags, description, meetingTime, presidents, zoomLink, filters} = this.props;
    const {open} = this.state;
    return (
      <button
        className={styles.wrapper}
        style={{backgroundColor: color}}
        onClick={this.handleClick}
      >
        <h2 className={styles.name}>{name}</h2>
        <ul className={styles.tags}>
          {tags.map(tag => (
            <li
              className={`${styles.tag} ${filters.includes(tag) ? styles.filtered : ''}`}
              key={tag}
            >{tag}</li>
          ))}
        </ul>
        {open && <>
          <p className={styles.field}>{description}</p>
          <p className={styles.field}>Time: <strong>{meetingTime}</strong></p>
          <p className={styles.field}>President: {presidents}</p>
          {zoomLink && <p className={styles.field}>Zoom link: <a
            className={styles.link}
            href={zoomLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.handleLinkClick}
          >{zoomLink.replace(/^https?:\/\//, '')}</a></p>}
        </>}
      </button>
    );
  }
}

export default Club;
