import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export default function Section({ children, title }) {
  return (
    <Box as="section" p={4}>
      <Box as="h1" mb={4}>
        {title}
      </Box>
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
