import PropTypes from 'prop-types';

import {
  Table,
  Theader,
  Tbody,
  Tr,
  Th,
  TdType,
  TdNumber,
  TdCurrency,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Theader>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Theader>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Tr key={id}>
              <TdType>{type}</TdType>
              <TdNumber>{amount}</TdNumber>
              <TdCurrency>{currency}</TdCurrency>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
