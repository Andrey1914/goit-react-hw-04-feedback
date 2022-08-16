import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles';
import { Box } from './Box';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const leaveFeedback = event => {
    const type = event.target.textContent;
    if (type === 'good') {
      return setGood(prev => prev + 1);
    }

    if (type === 'neutral') {
      return setNeutral(prev => prev + 1);
    }

    if (type === 'bad') {
      return setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  let statistics = (
    <Section title="Statistics">
      <Notification message="There is no feedback" />
    </Section>
  );

  if (countTotalFeedback() > 0) {
    statistics = (
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback()}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
  return (
    <Box
      maxWidth={512}
      mx="auto"
      my={5}
      p={4}
      textAlign="center"
      borderRadius="small"
      background="#f7f7f7"
      // boxShadow="0px 5px 10px 2px rgba(45, 90, 124, 0.2)"
      boxShadow="0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);"
    >
      <Global styles={GlobalStyles} />
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      {statistics}
    </Box>
  );
}
