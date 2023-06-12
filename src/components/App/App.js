import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    };
  }

  componentDidMount() {
    this.getUrlsData();
  }

  getUrlsData = () => {
    getUrls()
      .then(data => {
        const urls = data.urls;
        this.setState({ urls });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        <UrlContainer urls={this.state.urls} />
      </main>
    );
  }
}

export default App;
