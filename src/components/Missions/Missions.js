import React, { Component } from 'react';
import Title from '../Title/Title.js';
import MissionCard from '../MissionCard/MissionCard.js';

import missions from '../../data/missions.js';

import Container from './styles.js';

class Missions extends Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <Container data-testid="missions">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </Container>
      </>
    );
  }
}

export default Missions;
