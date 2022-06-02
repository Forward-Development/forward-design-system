// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import Network from '@iconify-icons/carbon/chart-network';
import { Icon as ReactIcon } from '@iconify/react/offline';

import Icon, { IIconProps } from '../Icon';

const NetworkIcon: FC<Omit<IIconProps, 'icon'>> = ({
  size,
  className,
  color,
}) => {
  return (
    <Icon
      icon={<ReactIcon icon={Network} />}
      size={size}
      className={className}
      color={color}
    />
  );
};

export default NetworkIcon;
