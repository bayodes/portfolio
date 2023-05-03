import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a developer fascinated with problem solving and 
        exploring new technologies for developing software solutions. 
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/bayode-olaoye/"}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;