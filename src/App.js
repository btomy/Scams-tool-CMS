import React, {Component} from 'react'
import MultiStepForm from "./MultiStepForm";

import data from './scams.json';

const API = 'https://hn.algolia.com/api/v1/search?query=';
//Add api when UAT is ready
const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      isLoading: false,
      error: null,
      startApp: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API + DEFAULT_QUERY)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  _startApp = () => {
    this.setState({
      startApp: true
    })
  }

  _reStartApp = () => {
    this.setState({
      startApp: false
    })
  }

  render() {
    const { data, isLoading, error, startApp } = this.state;
  
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="App">
        {startApp ? (
          data && <MultiStepForm data={data} restart={this._reStartApp} />
        ) : (
          <React.Fragment>
           <h1>{data.Title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.Introduction }}></div>
            <button onClick={this._startApp}>Start</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;