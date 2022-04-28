// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as ANC } from '../../assets/icons/crypto/ANC.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const ANCLogo: FC<Omit<ICryptoLogoProps, 'icon'>> = ({ size, className }) => {
  return <CryptoLogo logo={<ANC />} size={size} className={className} />;
};

export default ANCLogo;
