import { InputComponentsType } from './types';
import { Boolean } from './Boolean/Boolean';
import { Dropdown } from './Dropdown/Dropdown';
import { Text } from './Text/Text';
import { DragAndDrop } from './DragAndDrop/DragAndDrop';
import { CssMeasure } from './CssMeasure/CssMeasure';
import { Padding } from './Padding/Padding';
import { Border } from './Border/Border';
import { Stroke } from './Stroke/Stroke';
import { Margin } from './Margin/Margin';

export const inputComponents: InputComponentsType = {
  text: Text,
  number: Text,
  textarea: Text,
  color: Text,
  boolean: Boolean,
  select: Dropdown,
  selectColor: Dropdown,
  file: DragAndDrop,
  cssMeasure: CssMeasure,
  padding: Padding,
  margin: Margin,
  border: Border,
  stroke: Stroke,
};
