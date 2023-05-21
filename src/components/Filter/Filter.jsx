import { nanoid } from '@reduxjs/toolkit';
import css from './Filter.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleFilter } from 'redux/FilterSlice';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();

  const handleChange = event => {
    dispatch(handleFilter(event.currentTarget.value));
  };

  return (
      <div className={css.Container}>
          <label className={css.Label}>
              Find contacts by Name
              <input className={css.Input}
                type="text"
                name="filter"
                id={filterId}
                onChange={handleChange}
              />
          </label>
      </div>
    );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
};