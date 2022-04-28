// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as SFP } from '../../assets/icons/crypto/SFP.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const SFPLogo: FC<Omit<ICryptoLogoProps, 'icon'>> = ({ size, className }) => {
  return <CryptoLogo logo={<SFP />} size={size} className={className} />;
};

export default SFPLogo;
