import { InputProps } from './types';
import { ChangeEvent } from 'react';

type FileInputProps = InputProps & {
  onChange: (name: string, value: string) => void;
};

export function FileInput(props: FileInputProps) {
  const { onChange, attr } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onChange(attr.name, URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <>
      <label>
        <input
          css={[{ display: 'none' }]}
          type="file"
          onChange={handleChange}
        />
        <span
          css={[{ padding: 2, border: '1px solid #000', cursor: 'pointer' }]}
        >
          upload
        </span>
      </label>
    </>
  );
}
