import { keyframes, makeStyles } from '@qctoken/theme';
import type { QCTLoaderBuilderConfig } from './types';

export const animationLoader = keyframes`
  0% {
    transform: translate(0%, 0%) rotate(0deg);
  }
  
  20% {
    transform: translate(0%, 0%) rotate(40deg) skewX(10deg);
  }

  90% {
    transform: translate(0%, 0%)  rotate(360deg);
  }
  100% {
    transform: translate(0%, 0%) rotate(360deg);
  }
`;
export const animationLoaderTwo = keyframes`
  0% {
    transform: rotateY(0deg);
  } 
  50% {
    transform: rotateY(70deg);
  }
  
  90% {
    transform: rotateY(7deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

export const useStyles = makeStyles((theme, bc: QCTLoaderBuilderConfig) => ({
  root: {
    position: 'relative',
    width: bc.size,
    height: bc.size,
  },
  svg: {
    margin: '0 auto',
    position: 'absolute',
    top: '0',
    left: '0',
    animation: `${animationLoader} 1.7s cubic-bezier(0.65, 0.98, 0.73, 0.99) infinite`,
  },
  svgTwo: {
    margin: '0 auto',
    position: 'absolute',
    top: '0',
    left: '0',
    animation: `${animationLoaderTwo} 1.7s cubic-bezier(0.65, 0.98, 0.73, 0.99) infinite`,
  },
  fills: {
    fill: bc.color && theme.selectColor(bc.color),
  },
}));
