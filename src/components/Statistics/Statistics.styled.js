import styled from 'styled-components';

export const StatisticsStyled = styled.section`
  margin: 0 auto;
  width: 500px;

  font-weight: 700;
  font-size: 28px;
  line-height: 1.2;
  text-align: center;
  color: #000000;
  background-color: #ffffff;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Title = styled.h2`
  padding: 20px 0;

  color: gray;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  padding: 15px 5px;
  width: 100%;

  color: #ffffff;

  background-color: ${p => p.bgc};
`;

export const Label = styled.span`
  margin-bottom: 5px;

  font-size: 16px;
`;

export const Percentage = styled.span``;
