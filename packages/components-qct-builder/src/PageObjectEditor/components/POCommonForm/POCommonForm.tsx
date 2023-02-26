import type { PageModelInterface } from '@qctoken/register';
import { RequestModel } from '@qctoken/store';
import {
  type SyntheticEvent,
  type ChangeEvent,
  useState,
  useMemo,
} from 'react';
import type { PageObjectWithAttrs } from '../../types';
import { useStyles } from './POCommonForm.styles';

type ValueKeys = 'name' | 'position' | 'parentId' | 'parentType';
type Values = Pick<PageObjectWithAttrs, ValueKeys>;

type Props = {
  pageObject: PageObjectWithAttrs;
  pageStore: PageModelInterface;
  onUpdated: () => void;
};
const getValues = (pageObject: PageObjectWithAttrs): Values => ({
  name: pageObject.name,
  position: pageObject.position,
  parentId: pageObject.parentId,
  parentType: pageObject.parentType,
});

function getValue(name: ValueKeys, value: string): Values[typeof name] | null {
  switch (name) {
    case 'name':
      return value;
    case 'parentType':
      return value === '' ? null : value;
    case 'position':
      return value === '' ? 0 : parseInt(value);
    case 'parentId':
      return value === '' ? null : parseInt(value);
  }
}

export function POCommonForm(props: Props) {
  const { pageObject, onUpdated, pageStore } = props;
  const recordsStore = useMemo(() => new RequestModel({ pageStore }), []);
  const [errors, setErrors] = useState();
  const [values, setValues] = useState<Values>(() => getValues(pageObject));
  const [isChanged, setIsChanged] = useState(false);
  const styles = useStyles();
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (!isChanged) {
      return undefined;
    }

    await recordsStore.doRequest(
      {
        url: `/api/v1/builder/page_object/${pageObject.id}/`,
        method: 'PUT',
      },
      JSON.stringify(values),
    );

    if (recordsStore.isError) {
      setErrors(recordsStore.errorResponse);
      return undefined;
    }

    onUpdated();
    setIsChanged(false);
  };
  const handleReset = (event: SyntheticEvent) => {
    event.preventDefault();
    setValues(getValues(pageObject));
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const name = event.currentTarget.name as ValueKeys;
    setIsChanged(true);
    setErrors(undefined);

    setValues((prevValues) => ({
      ...prevValues,
      [name]: getValue(name, value),
    }));
  };

  return (
    <form onSubmit={handleSubmit} css={styles.root}>
      <label css={styles.inputLabel}>
        <span css={styles.inputLabelText}>Name:</span>
        <input
          onChange={handleChange}
          css={styles.input}
          value={values.name}
          name="name"
        />
      </label>
      <label css={styles.inputLabel}>
        <span css={styles.inputLabelText}>Position:</span>
        <input
          onChange={handleChange}
          css={styles.input}
          type="number"
          value={values.position}
          name="position"
        />
      </label>

      <label css={styles.inputLabel}>
        <span css={styles.inputLabelText}>Parent Id:</span>
        <input
          onChange={handleChange}
          css={styles.input}
          type="number"
          value={values.parentId || ''}
          name="parentId"
        />
      </label>

      <label css={styles.inputLabel}>
        <span css={styles.inputLabelText}>Parent Type:</span>
        <input
          onChange={handleChange}
          css={styles.input}
          value={values.parentType || ''}
          name="parentType"
        />
      </label>
      {errors && (
        <pre css={styles.errors}>{JSON.stringify(errors, null, 2)}</pre>
      )}
      {isChanged && (
        <div css={styles.actions}>
          <button
            css={[styles.button, styles.buttonReset]}
            onClick={handleReset}
          >
            Reset
          </button>
          <button css={styles.button} type="submit">
            Update
          </button>
        </div>
      )}
    </form>
  );
}
