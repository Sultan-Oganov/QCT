import { type ClassProps } from '@qctoken/register';
import type { ColumnAuthorNameType } from './types';
import { useStyles } from './ColumnAuthor.styles';

export function ColumnAuthor(props: ClassProps<ColumnAuthorNameType>) {
  const { bc, values } = props;
  const styles = useStyles();

  if (!values) {
    return null;
  }

  if (bc.name) {
    const authorInfo: any = values[bc.name];
    const { fullName, avatarUrl, email } = authorInfo || {};

    return (
      <td css={styles.root}>
        <div css={styles.wrap}>
          <img
            css={styles.img}
            src={
              avatarUrl ||
              'https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png'
            }
          />
          <p title={fullName || email} css={styles.name}>
            {fullName || email}
          </p>
        </div>
      </td>
    );
  }

  return null;
}
