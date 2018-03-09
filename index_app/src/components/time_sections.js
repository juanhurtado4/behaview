import React from 'react';

const TimeFilter = (props) => {
    return (
        <li>
            <h1>{props.time} min</h1>
            <p>{props.quest} questions each</p>
        </li>
    )
};

const TimeSections = (props) => {
    // Create the time filter options for the submenu
    const timeFilters = []; 
    let minutes = 12; 
    let questions = 2;
    for (let i =0; i < 4; i++) {
        timeFilters.push(
            <TimeFilter 
                key={i} 
                time={minutes} 
                quest={questions} 
            />
        )
        questions += 12;
        minutes += 2;
    }

    return (
        <ul>
            { timeFilters }
            <li>Show all</li>
        </ul>
    )
};