import React from 'react';
import MarginFullIcon from '../../assets/svg/MarginFullIcon';
import MarginHorizontalIcon from '../../assets/svg/MarginHorizontalIcon';
import MarginSeparateIcon from '../../assets/svg/MarginSeparateIcon';
import { ForPropertyBase } from '../ForPropertyBase/ForPropertyBase';
import { InputProps } from '../types';

const iconsInput = [MarginFullIcon, MarginHorizontalIcon, MarginSeparateIcon];

export function Margin(props: InputProps) {
  return <ForPropertyBase {...props} iconsInput={iconsInput} />;
}
