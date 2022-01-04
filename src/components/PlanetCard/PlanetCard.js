import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from './styles.js';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <Container data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="planet" />
      </Container>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
