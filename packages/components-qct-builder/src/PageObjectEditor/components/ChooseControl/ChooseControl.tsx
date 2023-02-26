import { useState, memo } from 'react';
import type { ScreenSize } from '@qctoken/theme';
import { Config } from '../Config/Config';
import type {
  ChangeInputInfo,
  GroupAttr,
  PageObjectWithAttrs,
} from '../../types';
import { inputComponents } from '../inputs';
import { InputProps } from '../types';
import { useStyles } from './ChooseControl.styles';

type Props = {
  pageObject: PageObjectWithAttrs;
  attr: GroupAttr;
  changedValue?: ChangeInputInfo;
  isOnlySaved: boolean;
  onAddChangedInputs: InputProps['onAddChangedInputs'];
  onDeleteAttribute: (
    name: string,
    attrDefault?: unknown,
    pageObjectId?: number,
  ) => void;
};

function getInputComponent(control: string, attr: GroupAttr) {
  const inputComponent = inputComponents[control];

  if (inputComponent) {
    return inputComponent;
  }

  const [attrType] = attr.type;

  if (attrType === 'BuilderConfig[]' || attrType === 'BuilderConfig') {
    return undefined;
  }

  return Config;
}

const SIZES: ScreenSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const ChooseControl = memo(function ChooseControl({
  pageObject,
  attr,
  changedValue,
  isOnlySaved,
  onAddChangedInputs,
  onDeleteAttribute,
}: Props) {
  const controls = attr.control.split(',');
  const [control, setControl] = useState(controls[0]);
  const [selectedSize, setSelectedSize] = useState<ScreenSize | undefined>();
  const styles = useStyles();

  const pageObjectAttr = pageObject.pageObjectAttrs.find(
    (pageAttr) => pageAttr.groupAttrId === attr.id,
  );
  const value = changedValue
    ? changedValue.value
    : pageObjectAttr?.value ?? attr.default;
  const InputComponent = getInputComponent(control, attr);

  const handleAddChangedInputs = (
    name: string,
    groupAttrId: number,
    pageObjectId: number,
    newValue: unknown,
  ) => {
    if (selectedSize) {
      if (typeof value === 'object' && value !== null) {
        newValue = { ...value, [selectedSize]: newValue };
      } else {
        newValue = { [selectedSize]: newValue };
      }
    }

    onAddChangedInputs(name, groupAttrId, pageObjectId, newValue);
  };
  const handleDelete = () => {
    if (selectedSize && typeof value === 'object' && value !== null) {
      const newValue = { ...value };
      delete newValue[selectedSize];
      onAddChangedInputs(attr.name, attr.id, pageObject.id, newValue);
    } else {
      onDeleteAttribute(attr.name, attr.default, pageObjectAttr?.id);
    }
  };

  if (!InputComponent || (!pageObjectAttr && isOnlySaved)) {
    return null;
  }

  const inputValue =
    selectedSize && typeof value === 'object' && value !== null
      ? value[selectedSize]
      : value;

  const input = (
    <InputComponent
      key={`${attr.id}-${control}-${selectedSize}`}
      value={inputValue}
      attr={attr}
      control={control}
      pageObjectId={pageObject.id}
      onAddChangedInputs={handleAddChangedInputs}
    />
  );
  const isHasAdaptive = attr.type.some((ctr) => ctr.startsWith('AdaptiveCss'));

  return (
    <div css={styles.root}>
      <div css={styles.actions}>
        {isHasAdaptive && (
          <div>
            {SIZES.map((size, idx) => (
              <button
                key={idx}
                type="button"
                css={[
                  styles.button,
                  typeof value === 'object' &&
                    value !== null &&
                    value.hasOwnProperty(size) &&
                    styles.buttonFilled,
                  size === selectedSize && styles.buttonActive,
                ]}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        )}
        {controls.length > 1 && (
          <div>
            {controls.map((ctrl, idx) => (
              <button
                key={idx}
                type="button"
                css={[styles.button, ctrl === control && styles.buttonActive]}
                onClick={() => setControl(ctrl)}
              >
                {ctrl}
              </button>
            ))}
          </div>
        )}
        {(changedValue || pageObjectAttr) &&
        changedValue?.deleteId === undefined ? (
          <div>
            <button type="button" css={styles.button} onClick={handleDelete}>
              X
            </button>
          </div>
        ) : null}
      </div>
      {input}
    </div>
  );
});
