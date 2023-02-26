import React from 'react';
import PaddingFullIcon from '../../assets/svg/PaddingFullIcon';
import PaddingHorizontalIcon from '../../assets/svg/PaddingHorizontalIcon';
import PaddingSeparateIcon from '../../assets/svg/PaddingSeparateIcon';
import { ForPropertyBase } from '../ForPropertyBase/ForPropertyBase';
import { InputProps } from '../types';

const iconsInput = [
  PaddingFullIcon,
  PaddingHorizontalIcon,
  PaddingSeparateIcon,
];

export function Padding(props: InputProps) {
  return <ForPropertyBase {...props} iconsInput={iconsInput} />;
}
