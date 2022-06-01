import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../css/Header.css'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isLoggedIn: false
        };

        // this.toggleNav = this.toggleNav.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }

    render() {
        function logout() {
            return (
                <div></div>
            )
        }

        return (
            <header>
                <nav>
                    <h1 className="main-navigation__title">
                        <Link to="/">Find Mentor</Link>
                    </h1>
                    <ul>
                        {this.isLoggedIn && (
                            <li>
                                <NavLink to="/mentors">All Mentors</NavLink>
                            </li>
                        )}
                        {this.isLoggedIn && (
                            <li>
                                <NavLink to="/requests">Requests</NavLink>
                            </li>
                        )}
                        {!this.isLoggedIn && (
                            <li>
                                <NavLink to="/auth">Login</NavLink>
                            </li>
                        )}
                        {this.isLoggedIn && (
                            <li>
                                <button onClick={logout}>LOGOUT</button>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        );
    }
}


export default Header;
