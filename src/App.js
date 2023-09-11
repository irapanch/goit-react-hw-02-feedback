import React from 'react';
import { StyledApp } from './Apps.Style';
import AddFeedback from './components/AddFeedback.jsx';
import Statistics from './components/Statistics.jsx';
import Section from './components/Section.jsx';
import Notification from './components/Notification.jsx';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleAddNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleAddBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : ((good / total) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <StyledApp>
        <Section title="Please leave feedback">
          <AddFeedback
            addGood={this.handleAddGood}
            addNeutral={this.handleAddNeutral}
            addBad={this.handleAddBad}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </StyledApp>
    );
  }
}

export default App;

// import React from 'react';
// import AddFeedback from './components/AddFeedback.jsx';
// import FeedbackOptions from './components/FeedbackOptions.jsx';

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleAddGood = () => {
//     this.setState(prev => ({
//       good: prev.good + 1,
//     }));
//   };

//   handleAddNeutral = () => {
//     this.setState(prev => ({
//       neutral: prev.neutral + 1,
//     }));
//   };

//   handleAddBad = () => {
//     this.setState(prev => ({
//       bad: prev.bad + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total === 0 ? 0 : ((good / total) * 100).toFixed(0);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <h1>Please leave feedback</h1>
//         <AddFeedback
//           addGood={this.handleAddGood}
//           addNeutral={this.handleAddNeutral}
//           addBad={this.handleAddBad}
//         />
//         <h2>Statistics</h2>
//         <div>Good: {good}</div>
//         <div>Neutral: {neutral}</div>
//         <div>Bad: {bad}</div>
//         <div>Total: {this.countTotalFeedback()}</div>
//         <div>Positive Feedbacks: {this.countPositiveFeedbackPercentage()}%</div>
//       </>
//     );
//   }
// }
// export default App;
