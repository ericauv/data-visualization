import React from 'react';
import styled from 'styled-components';
import { IconSection } from './Banner';
import { ReactComponent as TrafficLight } from '../icons/traffic-light-solid.svg';
import { ReactComponent as Share } from '../icons/share-solid.svg';
import { ReactComponent as Network } from '../icons/project-diagram-solid.svg';
import { ReactComponent as Filter } from '../icons/filter-solid.svg';
import { ReactComponent as Calendar } from '../icons/calendar-alt-solid.svg';
const OptionsBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  height: 50px;
  width: 100%;
  h2 {
    margin: 0;
    margin-top: 8px;
  }
`;

const OptionsSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const TrafficLightContainer = styled.div`
  margin-right: 20px;
  background: ${props => props.theme.colors[0]};
  border-radius: 50%;
  height: 40px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;

  svg.traffic-light > * {
    fill: white;
  }
`;

const OptionsBar = () => {
  return (
    <OptionsBarStyles className="options-bar">
      <OptionsSection className="options-section">
        <TrafficLightContainer>
          <TrafficLight className="traffic-light" height="70%" width="40px" />
        </TrafficLightContainer>
        <h2>Video Streaming Overview</h2>
      </OptionsSection>
      <OptionsSection className="options-section">
        <IconSection className="icon-section" color="black">
          <>
            <Network className="network icon-button no-fill" height="100%" />
            Network: Mobile
          </>
          <>
            <Filter className="filter icon-button no-fill" height="100%" />
            Filter
          </>
          <>
            <Share className="share icon-button no-fill" height="100%" />
            Share
          </>
          <>
            <Calendar className="calendar icon-button no-fill" height="100%" />
            Last 24 hours
          </>
        </IconSection>
      </OptionsSection>
    </OptionsBarStyles>
  );
};

export default OptionsBar;
