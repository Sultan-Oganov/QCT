import { ClassProps } from '@qctoken/register';
import { CourseState, QCTBoughtCourseCardNameType } from '../../types';
import { useStyles } from './InfoState.styles';

interface PropsTypes extends ClassProps<QCTBoughtCourseCardNameType> {
  handleChangeState: (newState: CourseState) => void;
}

const mockData = [
  {
    itemLabel: 'Статус курса:',
    itemValue: 'В процессе',
  },
  {
    itemLabel: 'Действие бонуса L2E:',
    itemValue: '13дней 4 часа',
  },
  {
    itemLabel: 'Изучено модулей:',
    itemValue: '4 из 20',
  },
  {
    itemLabel: 'Пройдено уроков:',
    itemValue: '22 из 180',
  },
  {
    itemLabel: 'Выполнено домашних заданий:',
    itemValue: '1 из 7',
  },
];

export function InfoState(props: PropsTypes) {
  const { handleChangeState } = props;
  const styles = useStyles();

  return (
    <div css={styles.root}>
      <div css={styles.header}>
        <div css={styles.headerTitle}>Информация:</div>
        <div css={styles.closeBtn} onClick={() => handleChangeState('taking')}>
          ✕
        </div>
      </div>
      <div css={styles.content}>
        {mockData.map((el, i) => (
          <div css={styles.rowItem} key={i}>
            <div css={[styles.item, styles.itemLabel]}>{el.itemLabel}</div>
            <div css={[styles.item, styles.itemValue]}>{el.itemValue}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
