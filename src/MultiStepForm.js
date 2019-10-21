import React, { Component } from 'react';

import Steps from './components/Steps/Steps';
import ToolBar from './components/ToolBar/ToolBar';

class MultiStepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      currentStep: 0,
      isResult: false,
      currentSelection: null,
      scamsHistory: []
    };
  }

  _checkIsResult = test => {
    const check = "R";
    let result = false;
    if (test.NextStepId.indexOf(check) !== -1) {
      result = true;
    }
    return result;
  };

  _handleChange = (e, data) => {
    const { checked } = e.target;
    if(checked) {
      this.setState({
        currentSelection: {
          AnswerCode: data.AnswerCode,
          NextStepId: data.NextStepId
        }
      });
    }
    
  };

  _next = e => {
    const { currentSelection, scamsHistory } = this.state;
    let currentStep = this.state.currentStep + 1;
    const isResult = currentSelection ? this._checkIsResult(currentSelection) : null;
    //check if anything exist in currentSelection else
    if (isResult) {
      this.setState({
        ...this.state,
        isResult: true,
        currentStep: currentStep,
        scamsHistory: [...scamsHistory, currentSelection],
        currentSelection: null,
      });
    } else if (currentSelection) {
      this.setState({
        currentStep: currentStep,
        scamsHistory: [...scamsHistory, currentSelection],
        currentSelection: null,
      });
    } else {
      //console.log("show Validation")
    }
  };

  _prev = e => {
    const { scamsHistory } = this.state;
    let currentStep = this.state.currentStep - 1;
    //console.log("Hist", scamsHistory);
    
    this.setState({
      ...this.state,
      currentStep: currentStep,
      currentSelection: {
        AnswerCode: scamsHistory[currentStep].AnswerCode,
        NextStepId: scamsHistory[currentStep].NextStepId
      }
    });
    scamsHistory.pop();
  };

  render() {
    const {data,currentStep,scamsHistory,isResult,currentSelection} = this.state;
    console.log("state ",this.state);

    const FirstQuestionId = data.StartingQuestionId;
    const FirstQuestion = data
      ? data["Questions"].filter(item => item.Id === FirstQuestionId)
      : null;
    const OtherQuestion =
      currentStep > 0
        ? data["Questions"].filter(
            item => item.Id === scamsHistory[currentStep - 1]["NextStepId"]
          )
        : null;

    const FirstQuestionAnswers = FirstQuestion.map(question => {
      return question.Answers.filter(answer => answer);
    });
    const OtherQuestionAnswers =
      OtherQuestion &&
      OtherQuestion.map(item => {
        return item.Answers.filter(answer => answer);
      });

    const summary = isResult ? data['ResultSummary'].filter(
      item => item.Id === scamsHistory[currentStep - 1]['NextStepId']
    )[0]: null;
    

    const Question = currentStep > 0 ? OtherQuestion : FirstQuestion;
    const Answers =
      currentStep > 0 ? OtherQuestionAnswers[0] : FirstQuestionAnswers[0];

    const ProgressBarValue = data && Question[0] ? Question[0]["Percentage"] : null;
    const BtnDisabledState = currentSelection == null ? true : false;
  
    return (
      <React.Fragment>

        <form action="" className="">
          <Steps
            currentStep={currentStep}
            isResult={isResult}
            summary={summary}
            question={Question}
            results={Answers}
            currentSelection={currentSelection}
            handleChange={this._handleChange}
            ProgressBarValue={ProgressBarValue}
          />

          <div className="btn-wrapper">
            <ToolBar
              currentStep={currentStep}
              next= {this._next}
              previous= {this._prev}
              isResult= {isResult}
              restart={this.props.restart}
              disabled= {BtnDisabledState}
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default MultiStepForm;
