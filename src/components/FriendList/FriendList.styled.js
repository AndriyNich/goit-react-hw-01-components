import styled from 'styled-components';

export const Wraper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 0 auto;
  width: 500px;

  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  color: #000000;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 10px;

  background-color: #ffffff;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 28px;
`;
