import PropTypes from 'prop-types';
import {
  StatisticsStyled,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  console.log(title);
  console.dir(stats);
  return (
    <StatisticsStyled>
      <Title>Upload stats</Title>

      <StatList>
        <Item>
          <Label>.docx</Label>
          <Percentage>4%</Percentage>
        </Item>
        <Item>
          <Label>.mp3</Label>
          <Percentage>14%</Percentage>
        </Item>
        <Item>
          <Label>.pdf</Label>
          <Percentage>41%</Percentage>
        </Item>
        <Item>
          <Label>.mp4</Label>
          <Percentage>12%</Percentage>
        </Item>
      </StatList>
    </StatisticsStyled>
  );
};

{
  /* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section> */
}
