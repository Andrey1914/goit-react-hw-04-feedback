import PropTypes from 'prop-types';
import { Text, Value } from 'components/Statistics/StatisticsStyled';

export default function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <div>
      <Text>
        Good:<Value>{good}</Value>
      </Text>
      <Text>
        Neutral:<Value>{neutral}</Value>
      </Text>
      <Text>
        Bad:<Value>{bad}</Value>
      </Text>
      <Text>
        Total:<Value>{totalFeedback}</Value>
      </Text>
      <Text>
        Positive feedback:
        <Value>{positiveFeedbackPercentage}%</Value>
      </Text>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
