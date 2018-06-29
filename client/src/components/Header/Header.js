import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state={
      showMenu: false,
    }
  }

  handleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

	render() {
		return(
      <div className="header-title">
      {this.state.showMenu ?
        <div className="header-menu" onMouseLeave={this.handleMenu.bind(this)}>
          <h1>Menu</h1>
          <ul>
            <li><a href="/user/edit">Change/Verify</a></li>
          </ul>
        </div>
      :
        <div className="menu-icon header-menu" onMouseEnter={this.handleMenu.bind(this)}>=</div>
      }
        <img src="http://192.168.1.179:5000/image/ccgn" />
        <h2>CCGN</h2>
      </div>
		);
	}
}

export default Header;