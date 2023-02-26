import { BooleanInput } from './BooleanInput';
import { SelectInput } from './SelectInput';
import { TextInput } from './TextInput';
import { NumberInput } from './NumberInput';
import { ConfigInput } from './ConfigInput';
import { InputComponentsType } from './types';
import { FileInput } from './FileInput';
import { CssMeasureInput } from './CssMeasure';

export const inputComponents: InputComponentsType = {
  text: TextInput,
  boolean: BooleanInput,
  select: SelectInput,
  selectColor: SelectInput,
  number: NumberInput,
  config: ConfigInput,
  file: FileInput,
  cssMeasure: CssMeasureInput,
};
