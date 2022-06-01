import React, {Component} from 'react';
import Header from './Header';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchRequests, fetchMentors, sendMessagestoMentor, auth} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Home from "./HomeComponent";
import {Login} from "./Login";
import ContactMentor from "./ContactMentor";

class Main extends Component {

    componentDidMount() {
        this.props.fetchMentors();
        this.props.fetchRequests();
    }

    render() {
        console.log("this.props", this.props)
        const HomePage = () => {
            return (
                <Home
                    mentor={this.props.mentors}
                />
            );
        };

        const contactMentor = (value) => {
            const val = this.props.mentors.mentors
            const mentor = value.match.params.mentorId;
            const toBePassed = val[mentor]
            // debugger
            return (
                <ContactMentor
                    mentor={toBePassed} mentorId={mentor}
                    isLoading={this.props.mentors.isLoading}
                    errMess={this.props.mentors.errMess}
                    // resetMessagesForm={this.props.resetMessagesForm }
                    sendMessagestoMentor={this.props.sendMessagestoMentor}
                />
            )
        }

        const login = () => {
            return (
                <Login
                    auth={this.props.auth}
                />
            )
        }

        return (
            <div>
                <Header></Header>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage}/>
                            {/*<Route exact path="/menu"*/}
                            {/*       component={() => <Menu mentors={this.props.mentors}/>}*/}
                            {/*/>*/}

                            {/*<Route path="/menu/:dishId" component={DishWithId} />*/}
                            <Route path="/contact/:mentorId" component={contactMentor}/>
                            {/*    resetFeedbackForm={this.props.resetFeedbackForm}*/}
                            {/*    postFeedback={this.props.postFeedback}*/}
                            {/*/>}*/}
                            {/*/>*/}
                            <Route exact path="/auth" component={login}/>
                            {/*<Route*/}
                            {/*    path="*"*/}
                            {/*    element={*/}
                            {/*        <div style={{ padding: "10rem" }}>*/}
                            {/*            <p>There's nothing here!</p>*/}
                            {/*        </div>*/}
                            {/*    }*/}
                            {/*/>*/}
                            {/* if url dosesnt match, bydefault redirect to */}
                            <Redirect to="/home"/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mentors: state.mentors,
        requests: state.requests,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMentors: () => dispatch(fetchMentors()),
    fetchRequests: () => dispatch(fetchRequests()),
    sendMessagestoMentor: (email, message, mentorId) => dispatch(sendMessagestoMentor(email, message, mentorId)),
    auth: (email, password, mode) => dispatch(auth(email, password, mode))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
