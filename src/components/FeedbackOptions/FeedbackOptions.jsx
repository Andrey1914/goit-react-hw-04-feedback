import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Btn } from 'components/Button/ButtonStyled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Box
      as="ul"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gridGap={4}
    >
      {options.map(option => {
        return (
          <Box as="li" key={option}>
            <Btn type="button" onClick={onLeaveFeedback}>
              {option}
            </Btn>
          </Box>
        );
      })}
    </Box>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
