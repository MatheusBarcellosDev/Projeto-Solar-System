import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Title from '../Title';
import PlanetCard from '../PlanetCard';

import Container from './styles';

import planets from '../../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <Container data-testid="solar-system">
          <Carousel
            autoFocus
            autoPlay
            stopOnHover
            width="60%"
            showStatus={ false }
            showArrows={ false }
          >
            {planets.map((planet) => (
              <PlanetCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            ))}
          </Carousel>
        </Container>
      </>
    );
  }
}

export default SolarSystem;
