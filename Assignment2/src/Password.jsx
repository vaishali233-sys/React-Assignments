
import React, { Component } from 'react';

class Password extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            message: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    checkPassword = () => {
        if (this.state.password === this.props.defaultPassword) {
            this.setState({
                message: 'Password matches!'
            });
        }
        else {
            this.setState({
                message: 'Password does not match!'
            });
        }
    }

    render() {
        return (
            <div style={{textAlign: "center", padding: "20px"}}>

                <h2>Password Checker</h2>

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />

                <br /><br />

                <button onClick={this.checkPassword}>
                    Submit
                </button>

                <h3>{this.state.message}</h3>

            </div>
        );
    }
}

Password.defaultProps = {
    defaultPassword: "12345"
};

export default Password;
