import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false

        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.auth.isAuthenticated != prevState.isAuthenticated) {
            return { isAuthenticated: true }
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.isAuthenticated !== this.state.isAuthenticated) {
            this.props.history.push('/dashboard');
           this.setState({isAuthenticated:false})
        }

    }
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        const { EmailError, PasswordError } = this.props.auth;
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">
                                Sign in to your Empoyee Dashboard
                            </p>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="Email Address"
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    error={EmailError}

                                />
                                <TextFieldGroup
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    error={PasswordError}
                                />
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {

    auth: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
    auth: state.auth,
    EmailError: state.auth.EmailError,
    PasswordError: state.auth.PasswordError

});

export default connect(mapStateToProps, { loginUser })(Login);
