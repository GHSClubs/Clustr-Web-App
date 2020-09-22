import React from 'react';
import styles from './CategoryDropdown.module.css';

class DropdownItem extends React.Component {
  handleClick = () => {
    this.props.onSelect(this.props.category);
  };

  render() {
    const {category, selected} = this.props;
    return (
      <button className={`${styles.item} ${selected ? styles.selected : ''}`} onClick={this.handleClick}>
        <span className={styles.check}>✔</span>
        <span className={styles.label}>{category}</span>
      </button>
    );
  }
}

class CategoryDropdown extends React.Component {
  wrapperRef = null;

  state = {
    open: false
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClose);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = e => {
    if (!this.wrapperRef.contains(e.target)) {
      this.setState({ open: false });
    }
  };

  setRef = ref => {
    this.wrapperRef = ref;
  };

  render() {
    const {children, categories, onSelect} = this.props;
    const {open} = this.state;
    const selectedCount = categories.filter(([, selected]) => selected).length
    return (
      <div className={styles.wrapper} ref={this.setRef}>
        <button
          className={styles.opener}
          onClick={this.handleOpen}
        >{children} {selectedCount > 0 && `(${selectedCount})`} ▾</button>
        {open && (
          <div className={styles.dropdown}>
            {categories.map(([category, selected]) => (
              <DropdownItem
                key={category}
                category={category}
                selected={selected}
                onSelect={onSelect}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CategoryDropdown;
