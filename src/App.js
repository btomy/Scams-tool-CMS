import React, {Component} from 'react'
import axios from 'axios';
import MultiStepForm from "./MultiStepForm";

const API = 'https://epidev03.citizensadvice.org.uk/tools/scams-tool-3/?json=1';
//Add api when UAT is ready

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: false,
      error: null,
      startApp: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(API)
      .then(response => {
        this.setState({ 
          data : response.data, 
          isLoading: false 
        })
      })
      .catch(error => 
        this.setState({ 
          error : error.response, 
          isLoading: false 
        })
      );
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
      return <p>{error.statusText}</p>;
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
           <h1>{ data && data.Title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data && data.Introduction }}></div>
            <button onClick={this._startApp}>Start</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;