import React from 'react';
import styles from './FilterButton.module.css';

/**
 * Represents a tag, and when clicked, will signal that the club should/should
 * not be filtered by the tag.
 */
class FilterButton extends React.Component {
  handleClick = () => {
    this.props.onSelect(this.props.name);
  };

  render() {
    const {name, color, selected} = this.props;
    return (
      <button
        className={`${styles.button} ${selected ? styles.selected : ''}`}
        onClick={this.handleClick}
        style={{'--color': color}}
      >{name}</button>
    );
  }
}

export default FilterButton;
