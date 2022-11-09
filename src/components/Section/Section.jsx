import PropTypes from "prop-types";
import { Container } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
      <Container>
        {title && <h3>{title}</h3>}
        {children}
      </Container>
    );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};