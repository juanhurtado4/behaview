import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Behaview</h1>
                <nav>
                    <ul>
                        <li>Search</li>
                        <li>Profile</li>
                        <li>Settings</li>
                        <li>Sign in</li>
                        <li>Sign out</li>
                        <li>Sign up</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;