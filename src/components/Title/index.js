import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

class Title extends Component {
  render() {
    const { headline } = this.props;

    return <Container>{headline}</Container>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
