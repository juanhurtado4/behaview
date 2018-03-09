import React, { Component } from 'react';

const NavBar = (props) => {
    return (
        <nav>
            <ul>
                {/* <Filter /> */}
            </ul>
        </nav>
    )
};

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Behaview</h1>
                <NavBar />
            </header>
        )
    }
}

export default Header;