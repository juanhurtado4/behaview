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
        const imgUrl = "http://fakeimg.pl/170x50/?text=Behaview&font=lobster"
        return (
            <header>
                <img 
                src={imgUrl}
                alt="Logo"
                />
                <NavBar />
            </header>
        )
    }
}

export default Header;