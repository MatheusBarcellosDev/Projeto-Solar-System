import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from './styles.js';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <Container data-testid="mission-card">
        <p data-testid="mission-name" className="titleNameMission">
          {name}
        </p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </Container>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
