import React from 'react';
import styled from 'styled-components';
import { numberWithCommas } from '../util';

interface IKPICardProps {
  name: string;
  percentValue: number;
  value: number;
  unit: string;
  appendText: string;
}

const CardStyles = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #eeeeee;
  width: 29%;
  height: 69px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  > p {
    margin: 0;
  }
`;

const Name = styled.p`
  font-size: 12px;
`;
const Percent = styled.p`
  font-size: 18px;
`;
const Value = styled.p`
  font-size: 28px;
`;
const Arrow = styled.p`
  font-size: 32px;
  font-weight: 900;

  &.positive {
    color: green;
  }

  &.negative {
    color: red;
  }
`;

const KPICard: React.FC<IKPICardProps> = props => {
  const { name, percentValue, value, unit, appendText } = props;
  return (
    <CardStyles className="kpi-card">
      <Content className="kpi-card-content">
        <Name className="kpi-card-content-name">{name}</Name>
        <Percent className="kpi-card-content-percent">
          {percentValue >= 0 ? `+${percentValue}%` : `${percentValue}%`}
        </Percent>
      </Content>
      <Content className="kpi-card-content">
        <Value className="kpi-card-content-value">
          <span>{`${numberWithCommas(value)} ${unit}`}</span>
          <span style={{ fontSize: '18px' }}>
            {`${unit ? ' ' : ''}${appendText}`}
          </span>
        </Value>
        <Arrow
          className={`kpi-card-content-arrow ${
            percentValue >= 0 ? 'positive' : 'negative'
          }`}
        >
          {percentValue >= 0 ? '↑' : '↓'}
        </Arrow>
      </Content>
    </CardStyles>
  );
};

export default KPICard;
