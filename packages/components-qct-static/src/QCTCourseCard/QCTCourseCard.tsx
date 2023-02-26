import { makeBC, mapComponentOne, type ClassProps } from '@qctoken/register';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './QCTCourseCard.styles';
import { Course, QCTCourseCardNameType } from './types';

export function QCTCourseCard(props: ClassProps<QCTCourseCardNameType>) {
  const { bc } = props;
  const values = props.values as Course;
  const navigate = useNavigate();
  const styles = useStyles(values);

  const handleClick = (id: string) => {
    if (bc.link) {
      navigate(bc.link + id);
    }
  };

  if (!props.values) {
    return null;
  }

  return (
    <div css={styles.root} onClick={() => handleClick(values.id)}>
      <div css={[styles.content]}>
        <div css={styles.header}>
          <div css={styles.stock}>1000 QCT</div>
        </div>
      </div>
      <div css={styles.description} title={values.name}>
        {values.name}
      </div>
      <div css={styles.footer}>
        {bc.promotions && <div css={styles.oldPrice}>130 000</div>}
        <div css={styles.footerBottom}>
          <div css={styles.price}>
            {mapComponentOne(
              makeBC('QCT.STATIC.ICON', {
                pageObjectId: 'Icon',
                objectId: 'Icon',
                name: 'qct',
                width: '15px',
                color: 'primary.main',
              }),
              props,
            )}
            {values.price}
          </div>
          <div css={styles.author}>
            <img
              css={styles.authorAvatar}
              src={values.createdBy?.avatarUrl as string}
            />
            <div css={styles.authorName}>
              {values.createdBy?.fullName as string}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
