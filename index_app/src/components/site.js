import React, { Component } from 'react';
import Header from './header';

class Site extends Component {
    render() {
        return (
            <div className="site">
                <Header />
                {/* <Profiles /> */}
                <main>Profiles</main>
            </div>
        )
    }
}

export default Site;