import { ClassProps, makeBC, mapComponentOne } from '@qctoken/register';
import { CourseState, QCTBoughtCourseCardNameType, Course } from '../../types';
import { useStyles } from './FinalState.styles';

interface PropsTypes extends ClassProps<QCTBoughtCourseCardNameType> {
  handleChangeState: (newState: CourseState) => void;
  handleClick: (id: string) => void;
}

export function FinalState(props: PropsTypes) {
  const { handleChangeState, handleClick } = props;
  const values = props.values as Course;
  const styles = useStyles(values);

  return (
    <div
      css={styles.root}
      onClick={(event: React.SyntheticEvent<EventTarget>) => {
        if (event.target instanceof HTMLElement && event.target.dataset.info) {
          return;
        }
        handleClick(values.id);
      }}
    >
      <div css={[styles.content]}>
        <div css={styles.header}>
          <div css={styles.stock}>1000 QCT</div>
          <div
            data-info
            css={styles.infoBtn}
            onClick={() => handleChangeState('info')}
          >
            !
          </div>
        </div>
        <div css={styles.icon}>
          {mapComponentOne(
            makeBC('QCT.STATIC.ICON', {
              pageObjectId: 'Icon',
              objectId: 'Icon',
              name: 'play-for-course',
              width: '36px',
              color: 'common.white',
            }),
            props,
          )}
        </div>
      </div>
      <div css={styles.description} title={values.name}>
        {values.name}
      </div>
      <div css={styles.footer}>
        <div css={styles.footerText}>Статус домашних заданий:</div>
        <div css={styles.footerCourseFinished}>Выполнено!</div>
      </div>
    </div>
  );
}
