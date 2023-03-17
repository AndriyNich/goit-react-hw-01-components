import styled from 'styled-components';

export const Card = styled.div`
  margin: 0 auto;
  width: 500px;

  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  color: #000000;
  background-color: #ffffff;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Description = styled.div`
  margin: 0 auto;
  padding: 60px 0;

  width: 300px;
  font-size: 20px;
  color: gray;
`;

export const Avatar = styled.img`
  margin: 0 auto 40px;
  width: 200px;
  height: 200px;

  border-radius: 50%;
  border: 1px solid gainsboro;
`;

export const Name = styled.p`
  margin-bottom: 10px;

  font-size: 28px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;

export const Location = styled.p``;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  gap: 0;

  width: 100%;

  border-top: 1px solid gray;
`;

export const StatsItem = styled.li`
  padding: 20px 5px;

  width: calc(100% / 3);

  background-color: gainsboro;
  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 5px;

  font-size: 16px;
  color: gray;
`;

export const Quantity = styled.span`
  display: block;

  font-size: 20px;
`;
