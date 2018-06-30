import React, {Component} from 'react';
import './EditPage.css';
import Header from '../Header/Header.js';

class EditPage extends Component {
  constructor() {
    super();
    this.state={
      entries: []

    }
  }

  getEntries(event) {
    event.preventDefault();
    var that = this;
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    // let search_info = {
    //   name: this.refs.name.value,
    //   phone: this.refs.phone.value
    // }
    // var request = new Request('http:localhost:5000/search/', {
    //   method: 'GET',
    //   headers: new Headers({ 'Content-Type': 'application/json'}),
    //   body: search_info
    // });

    fetch('http:localhost:5000/search/'+ name + '/' + phone)
      .then(function(response) {
        console.log("Error about to occur");
        response.json()
          .then(function(data) {
            console.log(data)
          })
      })
      .catch(function(err) {
        console.log(err);
      })

  }

	render() {
		return(
      <div>
        <Header />
        <form onSubmit={this.getEntries.bind(this)}>
          <p >Enter your name and phone number to find your order</p>
          <label>Name: <input type="text" ref="name" placeholder="John Smith" /></label>
          <label>Phone: <input type="number" ref="phone" placeholder="347 123 4567" /></label>
          <button >Find</button>
        </form>
        {

        }
      </div>
		);
	}
}

export default EditPage;