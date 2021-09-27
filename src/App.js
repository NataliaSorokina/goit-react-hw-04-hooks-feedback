import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export default function CreateApp() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  const handleFeedback = label => {
    switch (label) {
      case 'good':
        setGood(labelValue => labelValue + 1);
        break;

      case 'neutral':
        setNeutral(labelValue => labelValue + 1);
        break;

      case 'bad':
        setBad(labelValue => labelValue + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const quantities = Object.values({ good, neutral, bad });
    return quantities.reduce((quantitiy, total) => total + quantitiy, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good * 100) / countTotalFeedback());
    return percentage ? percentage : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        {<FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />}
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
