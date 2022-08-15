import PropTypes from 'prop-types';
import { Message } from 'components/Notification/NotificationStyled';

export default function Notification({ message }) {
  return <Message>{message}</Message>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
