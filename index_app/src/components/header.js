import React, { Component } from 'react';
import Filter from './filter';

const NavBar = (props) => {
    return (
        <nav>
            <ul>
                <Filter />
            </ul>
        </nav>
    )
};

class Header extends Component {
    render() {
        return (
            <header>
                <a href="/">
                    <i className="fas fa-bold fa-lg"></i>
                </a>
                <NavBar />
            </header>
        )
    }
}

export default Header;