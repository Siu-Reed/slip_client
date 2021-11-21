import React from 'react';
import { useParams } from 'react-router-dom';
import Slips from '../components/slips';

const Myslips = ({ slipService }) => {
  const { username } = useParams();
  return (
    <Slips slipService={slipService} username={username} addable={false} />
  );
};

export default Myslips;
