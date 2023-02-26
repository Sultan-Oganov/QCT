import React from 'react';
import StrokeFullIcon from '../../assets/svg/StrokeFullIcon';
import StrokeHorizontalIcon from '../../assets/svg/StrokeHorizontalIcon';
import StrokeSeparateIcon from '../../assets/svg/StrokeSeparateIcon';
import { ForPropertyBase } from '../ForPropertyBase/ForPropertyBase';
import { InputProps } from '../types';

const iconsInput = [StrokeFullIcon, StrokeHorizontalIcon, StrokeSeparateIcon];

export function Stroke(props: InputProps) {
  return <ForPropertyBase {...props} iconsInput={iconsInput} />;
}
