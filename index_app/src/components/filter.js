import React, { Component } from 'react';
import TimeSections from './time_sections';

const Filter = () => {
    return (
        <li className="filter">
            <i className="fas fa-filter"> Filter</i>
            <TimeSections />
        </li>
    )
};

export default Filter;