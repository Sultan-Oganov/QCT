import { useField, useFieldProps } from '@qctoken/form';
import type { ClassProps } from '@qctoken/register/lib/types';
import { useState } from 'react';
import type { TextAreaNameType } from './types';
import { useTheme } from '@qctoken/theme';
import { Observer } from '@qctoken/store';

export function TextArea(props: ClassProps<TextAreaNameType>) {
  const { bc, pageStore } = props;
  const [focused, setFocused] = useState(false);
  const field = useField({ name: bc.name, value: '' });
  const [value, inputProps] = useFieldProps<string, HTMLTextAreaElement>(
    field,
    { parse: (event) => event.target.value },
  );
  const theme = useTheme();
  const isFilled = focused || !!value;
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
          padding: theme.spacing(0, 0, 2, 0),
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <label css={{ display: 'inline-block', width: '100%' }}>
          <span
            css={[
              theme.typography.regular,
              {
                position: 'absolute',
                color: theme.colors.text.disabled,
                top: 0,
                left: 0,
                transition: '0.1s ease-in-out',
                transform: 'translate(15px, 14px)',
                transformOrigin: 'left top',
              },
              isFilled && {
                transform: 'scale(0.75) translate(20px, -10px)',
              },
            ]}
          >
            {bc.label}
          </span>
          <textarea
            rows={5}
            css={{
              border: 0,
              backgroundColor: theme.colors.common.white,
              borderRadius: 16,
              padding: theme.spacing(2, 4),
              width: '100%',
              outline: 'none',
              boxSizing: 'border-box',
              resize: 'vertical',
            }}
            maxLength={bc.maxLength}
            value={value}
            {...inputProps}
          ></textarea>
        </label>
        <fieldset
          css={{
            position: 'absolute',
            inset: '-8px 0px 0px',
            pointerEvents: 'none',
            padding: '0 10px',
            margin: 0,
            borderRadius: 16,
            border: `${theme.colors.common.stroke} solid 1px`,
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
              },
            ]}
          >
            {bc.label}
          </legend>
        </fieldset>
        {bc.maxLength && (
          <span
            title={bc.helperText}
            css={{
              display: 'inline-block',
              color: theme.colors.disabled.text,
              fontSize: 12,
              padding: theme.spacing(0, 0, 0, 4),
            }}
          >
            {`${value.length}/${bc.maxLength}`}
          </span>
        )}
        {bc.helperText && (
          <span
            title={bc.helperText}
            css={{
              display: 'block',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: theme.colors.disabled.text,
              fontSize: 12,
              padding: theme.spacing(0, 4, 0, 4),
            }}
          >
            {bc.helperText}
          </span>
        )}
      </div>
      <Observer
        render={() => (
          <div
            title={
              field.errors.length > 0
                ? pageStore.translate(field.errors[0].msg)
                : undefined
            }
            css={{
              color: theme.colors.text.error,
              padding: theme.spacing(0, 0, 0, 3),
              minHeight: 24,
              height: 24,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: 12,
              boxSizing: 'border-box',
              lineHeight: '24px',
            }}
          >
            {field.errors.length > 0 &&
              `* ${pageStore.translate(field.errors[0].msg)}`}
          </div>
        )}
      />
    </div>
  );
}
