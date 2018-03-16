import React from 'react';

const getTimeFilters = () => {
    /*
    Helper function creates an array of TimeFilter components
    Returns array
    */
    let minutes = 12;
    let questions = 2;
    const timeFilters = [];
    for (let i = 0; i < 4; i++) {
        timeFilters.push(
            <TimeFilter
                key={i}
                time={minutes}
                quest={questions}
            />
        )
        questions += 2;
        minutes += 12;
    }
    return timeFilters
};

const TimeFilter = (props) => {
    return (
        <li>
            <h1 className="sub-menu-title">{props.time} min</h1>
            <p className="sub-menu-para">{props.quest} questions each</p>
        </li>
    )
};

const TimeSections = (props) => {
    const timeFilters = getTimeFilters(); // Create filter options for submenu

    return (
        <ul>
            { timeFilters }
            <li className="sub-menu-all">Show all</li>
        </ul>
    )
};

export default TimeSections;