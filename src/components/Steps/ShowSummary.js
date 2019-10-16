import React, { Component } from 'react';

class ShowSummary extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showRevealable : false
    }
  }

  showRevealable = (e) => {
    this.setState({
      showRevealable: !this.state.showRevealable
    })
  }

  render() {
    const { showRevealable } = this.state;
    const slideHidden = showRevealable ? "" : "slide--hidden";
    const {summary} = this.props;
    return (
      <React.Fragment>
        <fieldset className="">
          <h3 dangerouslySetInnerHTML={{ __html: summary.ResultTitle }}></h3>
        <div dangerouslySetInnerHTML={{ __html: summary.ResultText }}></div>
      </fieldset>
      <section className="revealable revealable--setup" onClick={this.showRevealable}>
        <h2
          id="h-if-the-repair-didn-t-work-or-it-created-a-new-problem"
          className="js-ref revealable__heading"
          data-action="toggle"
          aria-controls="revealable-1"
        >
          If the repair didn’t work or it created a new problem
        </h2>
        <div
          className={`revealable__content ${slideHidden}`}
          id="revealable-1">
          <p>You should ask the garage to fix any faults that:</p>
          <ul>``
            <li>weren’t repaired properly</li>
            <li>weren’t correctly found</li>
            <li>didn’t exist before you took the car to the garage</li>
          </ul>
          <div className="callout--alert">
            <p>
              <strong>Your rights and what to say</strong>
            </p>
            <p>
              If the work wasn’t done with ‘reasonable skill and care’, you have
              the legal right to get the work done again or get a price
              reduction. Tell this to the garage. It can be difficult agreeing
              on what is ‘reasonable’, so it’s a good idea to get a second
              opinion from another garage.
            </p>
          </div>
          <h3 id="h-if-the-garage-won-t-do-the-work" className="js-ref">
            If the garage won’t do the work
          </h3>
          <p>
            You could negotiate with the garage to get a report from an
            independent garage or vehicle engineer to show the repairs were done
            properly. You and the garage would need to agree on who provides
            this report, how the cost would be split and that you’ll both accept
            the findings. If the report shows that the work wasn’t done properly
            then the original garage should fix the car.
          </p>
          <p>
            You could ask another garage to give you a written quote or estimate
            for the work. This will prove that the repairs or service need to be
            done again, and could help you negotiate with the original garage
            for the problem to be fixed.
          </p>
          <p>
            You can also ask the garage for a refund of some of the payment you
            made - you have the legal right to a price reduction if the work
            wasn’t done with ‘reasonable care and skill’. A second opinion can
            help you and the garage agree on what is reasonable.
          </p>
          <div className="callout--alert">
            <p>
              You may be able to get your money back through your bank. Contact
              them and say you want to use the ‘chargeback’ scheme. Many bank
              staff don’t know about the scheme, so you may need to talk to a
              manager.
            </p>
            <p>
              If you paid by credit card and the repair cost more than £100, it
              may be easier to tell your bank you want to ‘make a section 75
              claim’.
            </p>
          </div>
          <h3 id="h-next-steps" className="js-ref">
            Next steps
          </h3>
          <p>
            You should take further action if
            the garage refuses to make the repairs and you can’t reach an
            agreement.
          </p>
          
        </div>
      </section>
    </React.Fragment>
  );
  }
};

export default ShowSummary;
