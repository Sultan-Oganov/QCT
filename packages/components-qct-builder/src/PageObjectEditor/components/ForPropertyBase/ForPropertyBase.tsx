import { InputProps } from '../types';
import { theme } from '@qctoken/theme';
import { Title } from '../Title/Title';
import { ChangeEvent, useState } from 'react';
import { parseData } from './utils';

type Props = {
  iconsInput: any[];
};

enum Direction {
  Top = 0,
  Right = 1,
  Bottom = 2,
  Left = 3,
}

export function ForPropertyBase(props: Props & InputProps) {
  const [values, setValues] = useState(() => parseData(props.value));
  const count = values.length;
  const { attr, onAddChangedInputs, pageObjectId, iconsInput } = props;

  const handleClick = () => {
    setValues((prev) => {
      if (attr.name === 'borderRadius') {
        return prev.length === 1
          ? [...prev, ...prev, ...prev, ...prev]
          : [prev[0]];
      }
      switch (prev.length) {
        case 1:
          return [prev[0], prev[0]];
        case 2:
          return [...prev, ...prev];
        default:
          return [prev[0]];
      }
    });
  };

  const handleChange =
    (prop: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = [...values];
      const parsedValue = parseInt(event.target.value);

      newValue[prop] = isNaN(parsedValue) ? 0 : parsedValue;
      setValues(newValue);

      const result = newValue.map((item) => `${item}px`).join(' ');
      onAddChangedInputs(attr.name, attr.id, pageObjectId, result);
    };

  return (
    <div
      css={{
        boxSizing: 'border-box',
        borderBottom: `1px solid ${theme.colors.common.stroke}`,
        padding: theme.spacing(4, 4, 0, 4),
      }}
    >
      <div
        css={[
          {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: theme.spacing(0, 0, 4, 0),
          },
        ]}
      >
        <Title title={attr.name} />
        <div
          css={{
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          {count === 1
            ? iconsInput[0]()
            : count === 2
            ? iconsInput[1]()
            : iconsInput[2]()}
        </div>
      </div>

      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {values.map((val: number, index: number) => (
          <div
            key={index}
            css={[
              {
                flex: count === 1 ? '0 1 100%' : '0 1 45%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: `1px solid ${theme.colors.common.stroke}`,
                borderRadius: 6,
                margin: theme.spacing(0, 0, 4, 0),
                background: theme.colors.common.white,
              },
            ]}
          >
            <div
              css={{
                height: '100%',
                flex: '0 1 10%',
                display: 'grid',
                placeItems: 'center',
                margin: theme.spacing(0, 1, 0),
                transform:
                  attr.name === 'borderRadius' && index === 2
                    ? `rotate(${index * 135}deg)`
                    : attr.name === 'borderRadius' && index === 3
                    ? `rotate(${index * 60}deg)`
                    : `rotate(${index * 90}deg)`,
              }}
            >
              {count === 1
                ? iconsInput[0]()
                : count === 2
                ? iconsInput[1]()
                : iconsInput[2]()}
            </div>
            <div
              css={{
                flex: '0 1 90%',
              }}
            >
              <input
                value={val || 0}
                onChange={(event) => {
                  switch (index) {
                    case 0:
                      return handleChange(Direction.Top)(event);
                    case 1:
                      return handleChange(Direction.Right)(event);
                    case 2:
                      return handleChange(Direction.Bottom)(event);
                    case 3:
                      return handleChange(Direction.Left)(event);
                  }
                }}
                placeholder="0"
                css={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: theme.spacing(2.5, 0),
                  outline: 'none',
                  border: 'none',
                  borderRadius: 6,
                }}
                type="text"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
