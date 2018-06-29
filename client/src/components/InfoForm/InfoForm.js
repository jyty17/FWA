import React from 'react';
// import './InfoForm.css';

class InfoForm extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("InfoForm component mounted")
  }
	render() {
		return(
      <p >InfoForm</p>
			);
	}
}

export default InfoForm;