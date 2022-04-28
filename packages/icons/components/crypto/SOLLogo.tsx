// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as SOL } from '../../assets/icons/crypto/SOL.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const SOLLogo: FC<Omit<ICryptoLogoProps, 'icon'>> = ({ size, className }) => {
  return <CryptoLogo logo={<SOL />} size={size} className={className} />;
};

export default SOLLogo;
