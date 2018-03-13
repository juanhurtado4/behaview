import React, { Component } from 'react';
import TimeSections from './time_sections';

const Filter = () => {
    return (
        <li className="filter">
            <span>Filter</span>
            <TimeSections />
        </li>
    )
};

export default Filter;