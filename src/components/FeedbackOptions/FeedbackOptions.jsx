import PropTypes from 'prop-types';
import { ButtonStyle } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => (
        <ButtonStyle
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          key={option}
        >
          {option}
        </ButtonStyle>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
