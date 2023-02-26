import { ClassProps, makeBC, mapComponentOne } from '@qctoken/register';
import { Course, CourseState, QCTBoughtCourseCardNameType } from '../../types';
import { useStyles } from './TakingState.styles';

interface PropsTypes extends ClassProps<QCTBoughtCourseCardNameType> {
  handleChangeState: (newState: CourseState) => void;
  handleClick: (id: string) => void;
}

export function TakingState(props: PropsTypes) {
  const { handleChangeState, handleClick } = props;
  const values = props.values as Course;
  const progress: number = values?.userInfo?.progress ?? 0;
  const styles = useStyles(values, progress);
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
        <div css={styles.blackFone}></div>
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
        <div css={styles.progress}>
          {mapComponentOne(
            makeBC('QCT.COMMON.PROGRESSBAR', {
              pageObjectId: 'Progress',
              objectId: 'Progress',
              // @ts-ignore
              width: '100%',
              height: '4px',
              activeLineColor: 'primary.main',
              lineColor: 'common.stroke',
              progress,
              fontSize: '0px',
            }),
            props,
          )}
        </div>
        <div css={styles.footerText}>
          <div>Курс пройден на:</div>
          <div>{progress}%</div>
        </div>
      </div>
    </div>
  );
}
