import React from 'react';
import styles from './Club.module.css';

function matchedString(string, searchFilter) {
  if (!searchFilter) return string;
  const parts = [];
  // Reset .exec
  searchFilter.lastIndex = 0;
  let match = null;
  let lastIndex = 0;
  while ((match = searchFilter.exec(string))) {
    parts.push(string.slice(lastIndex, match.index));
    parts.push(<span className={styles.matched} key={match.index}>{match[0]}</span>);
    lastIndex = match.index + match[0].length;
  }
  parts.push(string.slice(lastIndex));
  return parts;
}

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
    const {name, color, tags, description, meetingTime, presidents, zoomLink, searchFilter, filters} = this.props;
    const {open} = this.state;
    return (
      <button
        className={styles.wrapper}
        style={{backgroundColor: color}}
        onClick={this.handleClick}
      >
        <h2 className={styles.name}>{matchedString(name, searchFilter)}</h2>
        <ul className={styles.tags}>
          {tags.map(tag => (
            <li
              className={`${styles.tag} ${filters.includes(tag) ? styles.filtered : ''}`}
              key={tag}
            >{tag}</li>
          ))}
        </ul>
        {open && <>
          <p className={styles.field}>{matchedString(description, searchFilter)}</p>
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
