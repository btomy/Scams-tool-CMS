import React, {Component} from 'react'
import axios from 'axios';
import MultiStepForm from "./MultiStepForm";
import Button from "./components/Button/Button";

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

  get startButton() {
      return (
        <Button className="button nxt-btn" click={this._startApp}>
          Start
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
          >
            <path
              d="M10.8 9L2.9 16.8C2.8 16.9 2.6 17 2.5 17 2.3 17 2.1 16.9 2 16.8L0.2 15C0.1 14.9 0 14.8 0 14.6 0 14.4 0.1 14.2 0.2 14.1L5.9 8.5 0.2 2.9C0.1 2.8 0 2.6 0 2.4 0 2.2 0.1 2.1 0.2 2L2 0.2C2.1 0.1 2.3 0 2.5 0 2.6 0 2.8 0.1 2.9 0.2L10.8 8C10.9 8.2 11 8.3 11 8.5 11 8.7 10.9 8.8 10.8 9Z"
              fill="white"
            />
          </svg>
        </Button>
      );
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
            {this.startButton}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;