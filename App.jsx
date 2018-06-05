import React from 'react';
import s from './App.css';

class App extends React.Component {
  // Functions go here

   render() {
      return (
        <div className={s.layout}>
          <div className={s.title}>
            <h1>CCGN</h1>
          </div>
          <h2>Food Selection App</h2>
          <p className={s.prompt}> Please enter your name and phone number</p>
          <form onSubmit={this.saveInfo}>
            <label>Name: <input type="text" /></label>
            <input type="submit" value="Submit" />
          </form>
          <p className={s.prompt}>Please select one of the following choices</p>
          <div className={s.list}>
            <label className={s.container}>One
              <input type="radio" name="radio"></input>
              <span className={s.checkmark}></span>
            </label>
            <label className={s.container}>Two
              <input type="radio" name="radio"></input>
              <span className={s.checkmark}></span>
            </label>
            <label className={s.container}>Three
              <input type="radio" name="radio"></input>
              <span className={s.checkmark}></span>
            </label>
          </div>
        </div>
      );
   }
}
export default App;