import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import withLoading from '../../hocs/withLoading';

import './Selector.scss';

const Selector = ({ options = [], onChange, onClick = () => {} }) => {
  const listRef = useRef();

  const renderOptions = () => {
    return options.map((option, i) => {
      return (
        <li key={i} className="selector__list__item" onClick={onClick}>
          <div>
            <img src={option.badge} alt={option.name} />
          </div>
        </li>
      );
    });
  };

  const handleScroll = () => {
    const { scrollLeft, clientWidth } = listRef.current;
    const newIndex = scrollLeft / clientWidth;

    if (Number.isInteger(newIndex)) {
      onChange(options[newIndex]);
    }
  };

  return (
    <div className="selector">
      <ul className="selector__list" onScroll={handleScroll} ref={listRef}>
        {renderOptions()}
      </ul>
    </div>
  );
};

Selector.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default withLoading('options')(Selector);
