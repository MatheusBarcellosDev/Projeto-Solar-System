import React, { Component } from 'react';
import Title from '../Title';
import MissionCard from '../MissionCard';

import missions from '../../data/missions';

import Container from './styles';

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
