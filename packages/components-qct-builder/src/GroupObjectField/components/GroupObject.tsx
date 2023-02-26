import { GroupObjectFieldRecord } from '../types';
import { useStyles } from './GroupObject.styles';
import { useState } from 'react';
import notFound from '../assets/images/notFound.jpg';

type Props = {
  name: string;
  record: GroupObjectFieldRecord;
  onClick: (id: number) => void;
};

export function GroupObject({ name, record, onClick }: Props) {
  const styles = useStyles();
  // TODO: Get image from record
  const [imgSrc, setImgSrc] = useState(notFound);
  const onError = () => setImgSrc(notFound);

  return (
    <div css={styles.root}>
      <button onClick={() => onClick(record.id)} type="submit" css={styles.btn}>
        <div css={styles.block}>
          <img
            src={imgSrc ? imgSrc : notFound}
            css={styles.image}
            onError={onError}
            alt="Preview image"
          />
        </div>
        <div css={styles.text}>{name}</div>
      </button>
    </div>
  );
}
