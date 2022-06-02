// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import QrCode from '@iconify-icons/carbon/qr-code';
import { Icon as ReactIcon } from '@iconify/react/offline';

import Icon, { IIconProps } from '../Icon';

const QrCodeIcon: FC<Omit<IIconProps, 'icon'>> = ({
  size,
  className,
  color,
}) => {
  return (
    <Icon
      icon={<ReactIcon icon={QrCode} />}
      size={size}
      className={className}
      color={color}
    />
  );
};

export default QrCodeIcon;
