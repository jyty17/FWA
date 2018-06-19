import React from 'react';
import './InfoForm.css';
import gql from 'apollo-boost';
import graphql from 'react-apollo';

class InfoForm extends React.Component {
	render() {
		return(
      <p className="prompt"> Please enter your name and phone number</p>
        <form onSubmit={this.sendForm} >
          <label>Name: <input type="text" value={this.state.value} onChange={(e) => this.setState({name: e.target.value})}/></label>
          <label>Phone: <input type="text" value={this.state.value} onChange={(e) => this.setState({phone: e.target.value})}/></label>
          <input type="submit" value="Submit" />
        </form>
			);
	}
}

export default grapql()