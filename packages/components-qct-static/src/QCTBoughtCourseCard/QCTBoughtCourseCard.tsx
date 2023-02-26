import { useState } from 'react';
import { type ClassProps } from '@qctoken/register';
import { useStyles } from './QCTBoughtCourseCard.styles';
import { QCTBoughtCourseCardNameType, CourseState } from './types';
import { TakingState } from './components/TakingState/TakingState';
import { InfoState } from './components/InfoState/InfoState';
import { FinalState } from './components/FinalState/FinalState';
import { useNavigate } from 'react-router-dom';

export function QCTBoughtCourseCard(
  props: ClassProps<QCTBoughtCourseCardNameType>,
) {
  const { bc } = props;
  const [state, setState] = useState<CourseState>('taking');
  const navigate = useNavigate();
  const styles = useStyles();

  const handleChangeState = (newState: CourseState) => {
    setState(newState);
  };

  const handleClick = (id: string) => {
    if (bc.link) {
      navigate(bc.link + id);
    }
  };

  if (!props.values) {
    return null;
  }

  const renderTab = {
    taking: (
      <TakingState
        {...props}
        handleChangeState={handleChangeState}
        handleClick={handleClick}
      />
    ),
    info: <InfoState {...props} handleChangeState={handleChangeState} />,
    final: (
      <FinalState
        {...props}
        handleChangeState={handleChangeState}
        handleClick={handleClick}
      />
    ),
  };
  return <div css={styles.root}>{renderTab[state]}</div>;
}
