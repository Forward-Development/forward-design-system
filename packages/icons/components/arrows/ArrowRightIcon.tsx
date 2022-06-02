// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import ArrowRight from '@iconify-icons/carbon/arrow-right';
import { Icon as ReactIcon } from '@iconify/react/offline';

import Icon, { IIconProps } from '../Icon';

const ArrowRightIcon: FC<Omit<IIconProps, 'icon'>> = ({
  size,
  className,
  color,
}) => {
  return (
    <Icon
      icon={<ReactIcon icon={ArrowRight} />}
      size={size}
      className={className}
      color={color}
    />
  );
};

export default ArrowRightIcon;
