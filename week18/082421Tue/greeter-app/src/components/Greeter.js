import React from 'react';

class Greeter extends React.Component {
    render() {
		return (
            <div className={"more_greeting"}>
			    <h1>Hello {this.props.who} from the Greeter Component!</h1>
                <p>Your name is {this.props.who.length} characters long</p>
            </div>
        );
	}}

export default Greeter;