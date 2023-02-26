import { useTheme } from '@qctoken/theme';
import { useState } from 'react';
import { Title } from '../Title/Title';
import { InputProps } from '../types';

const getValue = (value: string | boolean) =>
  String(value) === 'true' ? true : false;

export function Boolean(props: InputProps) {
  const { attr, onAddChangedInputs, pageObjectId } = props;
  const theme = useTheme();
  const [status, setStatus] = useState<boolean>(() => getValue(props.value));

  const handleChange = (isChecked: boolean) => {
    setStatus(isChecked);
    onAddChangedInputs(attr.name, attr.id, pageObjectId, isChecked);
  };

  return (
    <div
      css={{
        boxSizing: 'border-box',
        borderBottom: `1px solid ${theme.colors.common.stroke}`,
        padding: theme.spacing(4),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Title title={attr.name} />

      <div
        css={{
          width: 115,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: theme.colors.disabled.background,
          borderRadius: 6,
          padding: theme.spacing(1),
        }}
      >
        <button
          disabled={!status}
          onClick={() => handleChange(false)}
          css={[
            { border: 'none', outline: 'none', cursor: 'pointer' },
            status
              ? {
                  width: '50%',
                  padding: theme.spacing(2),
                  textAlign: 'center',
                  background: 'transparent',
                  borderRadius: 5,
                  color: theme.colors.text.disabled,
                }
              : {
                  width: '50%',
                  padding: theme.spacing(2),
                  textAlign: 'center',
                  borderRadius: 5,
                  background: theme.colors.common.white,
                  color: theme.colors.common.black,
                },
          ]}
        >
          False
        </button>
        <button
          disabled={status}
          onClick={() => handleChange(true)}
          css={[
            { border: 'none', outline: 'none', cursor: 'pointer' },
            status
              ? {
                  width: '50%',
                  padding: theme.spacing(2),
                  textAlign: 'center',
                  borderRadius: 5,
                  background: theme.colors.common.white,
                  color: theme.colors.common.black,
                }
              : {
                  width: '50%',
                  padding: theme.spacing(2),
                  textAlign: 'center',
                  background: 'transparent',
                  borderRadius: 5,
                  color: theme.colors.text.disabled,
                },
          ]}
        >
          True
        </button>
      </div>
    </div>
  );
}
