import React from 'react';
import './InfoForm.css';

class InfoForm extends React.Component {

  constructor(props) {
    super(props);
  }

  
	render() {
		return(
      <p className="prompt"> Please enter your name and phone number</p>
        <form onSubmit={this.props.sendForm} >
          <label>Name: <input type="text" ref="name" /></label>
          <label>Phone: <input type="text" ref="name" /></label>
          <List />
          <input type="submit" value="Submit" />
        </form>
			);
	}
}

export default InfoForm;