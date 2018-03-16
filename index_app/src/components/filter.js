import React, { Component } from 'react';
import TimeSections from './time_sections';

const Filter = () => {
    return (
        <li className="filter">
            <i class="fas fa-filter">Filter</i>
            <TimeSections />
        </li>
    )
};

export default Filter;