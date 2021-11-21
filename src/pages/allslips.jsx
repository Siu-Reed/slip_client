import React from 'react';
import Slips from '../components/slips';

const Allslips = ({ slipService }) => (
  <Slips slipService={slipService} addable={true} />
);

export default Allslips;
