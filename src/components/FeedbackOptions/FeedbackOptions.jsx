import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StyledButton } from 'components/Button/ButtonStyled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Box
      as="ul"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      gridGap={4}
      pb={4}
      borderBottom="normal"
    >
      {options.map(option => {
        return (
          <Box as="li" key={option}>
            <StyledButton onClick={onLeaveFeedback}>{option}</StyledButton>
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
