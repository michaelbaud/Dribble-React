import React, { Component } from 'react';
import '../tachyon.css'
import '../css/App.css';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
