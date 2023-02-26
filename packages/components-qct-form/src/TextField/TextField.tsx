import { useState } from 'react';
import { useField, useFieldProps } from '@qctoken/form';
import { useTheme } from '@qctoken/theme';
import { ClassProps, mapComponentOne } from '@qctoken/register';
import type { TextFieldNameType } from './types';
import { Observer, useSetGlobal } from '@qctoken/store';

const MIN_LEFT = 15;

export function TextField(props: ClassProps<TextFieldNameType>) {
  const { bc, pageStore } = props;
  const disabled = bc.disabled || props.disabled;
  const [focused, setFocused] = useState(false);
  const field = useField({ name: bc.name, value: '' });
  const [value, inputProps] = useFieldProps<string>(field);
  const theme = useTheme();
  const isFilled = focused || value !== '';
  const left = MIN_LEFT + (bc.icon ? 42 : 0);
  useSetGlobal(pageStore, field.value, bc.setglobal);

  return (
    <div
      css={{
        display: 'flex',
        width: '100%',
        minWidth: 0,
        flexDirection: 'column',
      }}
    >
      <div
        css={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: theme.colors.common.white,
          borderRadius: 16,
          padding: '0px 8px',
          boxSizing: 'border-box',
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {bc.icon && (
          <div
            css={{
              display: 'grid',
              placeItems: 'center',
              padding: theme.spacing(0, 2),
            }}
          >
            {mapComponentOne(bc.icon, props)}
          </div>
        )}
        <label css={{ display: 'inline-block', width: '100%', cursor: 'text' }}>
          <span
            css={[
              theme.typography.regular,
              {
                position: 'absolute',
                color: theme.colors.text.disabled,
                top: 0,
                left: 0,
                transition: '0.1s ease-in-out',
                transform: `translate(${left}px, 14px)`,
                transformOrigin: 'left top',
              },
              isFilled && {
                transform: 'scale(0.75) translate(20px, -10px)',
              },
            ]}
          >
            {bc.label}
          </span>
          <input
            css={{
              border: 0,
              backgroundColor: theme.colors.common.white,
              borderRadius: 16,
              height: 50,
              padding: MIN_LEFT === left ? '0 16px' : '0 16px 0 0',
              width: '100%',
              outline: 'none',
              boxSizing: 'border-box',
            }}
            disabled={disabled}
            type={bc.htmlType}
            value={value}
            maxLength={bc.maxLength}
            {...inputProps}
          />
        </label>
        <fieldset
          css={{
            position: 'absolute',
            pointerEvents: 'none',
            padding: '0 10px',
            margin: 0,
            borderRadius: 16,
            border: `${theme.colors.common.stroke} solid 1px`,
            top: -7,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <legend
            css={[
              theme.typography.regular,
              {
                visibility: 'hidden',
                overflow: 'hidden',
                float: 'unset',
                maxWidth: isFilled ? '100%' : 0.01,
                display: 'inline-block',
                fontSize: 12,
                padding: isFilled ? theme.spacing(0, 1) : 0,
                whiteSpace: 'nowrap',
              },
            ]}
          >
            {bc.label}
          </legend>
        </fieldset>
      </div>

      <Observer
        render={() => (
          <span
            title={
              field.errors.length > 0
                ? pageStore.translate(field.errors[0].msg)
                : undefined
            }
            css={{
              minHeight: 24,
              height: 24,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color:
                field.errors.length > 0
                  ? theme.colors.text.error
                  : theme.colors.disabled.text,
              padding: theme.spacing(0, 0, 0, 3),
              fontSize: 12,
              boxSizing: 'border-box',
              lineHeight: '24px',
              minWidth: 0,
            }}
          >
            {field.errors.length > 0
              ? `* ${pageStore.translate(field.errors[0].msg)}`
              : bc.helperText && (
                  <span title={bc.helperText}>{bc.helperText}</span>
                )}
          </span>
        )}
      />
    </div>
  );
}
