import React, { PropTypes, Component } from 'react';

import styles from './EventSearchInput.sass';

class EventSearchInput extends Component {
  componentDidMount() {
    this.input.focus();
  }

  render() {
    const { filterInput, updateFilters } = this.props;

    return (
      <div className={styles.inputSearchWrapper}>
        <input
          value={filterInput}
          ref={node => this.input = node}
          onInput={e => updateFilters({ searchText: e.target.value })}
          placeholder="Search"
        />
      </div>
    );
  }
};

EventSearchInput.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filterInput: PropTypes.string.isRequired
};

export default EventSearchInput;
