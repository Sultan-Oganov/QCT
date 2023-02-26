import React from 'react';
import BorderFullIcon from '../../assets/svg/BorderFullIcon';
import BorderSeparateIcon from '../../assets/svg/BorderSeparateIcon';
import { ForPropertyBase } from '../ForPropertyBase/ForPropertyBase';
import { InputProps } from '../types';

const iconsInput = [BorderFullIcon, BorderFullIcon, BorderSeparateIcon];

export function Border(props: InputProps) {
  return <ForPropertyBase {...props} iconsInput={iconsInput} />;
}
