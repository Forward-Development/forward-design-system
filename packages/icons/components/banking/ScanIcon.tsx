// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import Scan from '@iconify-icons/carbon/scan-alt';
import { Icon as ReactIcon } from '@iconify/react/offline';

import Icon, { IIconProps } from '../Icon';

const ScanIcon: FC<Omit<IIconProps, 'icon'>> = ({ size, className, color }) => {
  return (
    <Icon
      icon={<ReactIcon icon={Scan} />}
      size={size}
      className={className}
      color={color}
    />
  );
};

export default ScanIcon;
