import React, { Component } from 'react';
import TimeSections from './time_sections';

const Filter = () => {
    return (
        <li class="filter">
            <span>Filter</span>
            <TimeSections />
        </li>
    )
};

export default Filter;