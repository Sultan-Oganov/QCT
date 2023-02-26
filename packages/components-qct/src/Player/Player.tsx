import { useMemo, useState } from 'react';
import ReactPlayer from 'react-player';
import type { ClassProps } from '@qctoken/register/lib/types';
import { useRunExecutor } from '@qctoken/executor';
import type { PlayerNameType } from './types';
import { useStyles } from './Player.styles';

const PLAYER_NAME = 'youtu';

export function Player({ pageStore, bc, values }: ClassProps<PlayerNameType>) {
  const src = useRunExecutor(pageStore, bc.src, values);
  const styles = useStyles(bc);
  const [isEnded, setIsEnded] = useState(false);
  const [playing, setPlaying] = useState(false);

  const isYouTube = useMemo(() => {
    try {
      const domain = new URL(src);
      return domain.hostname.includes(PLAYER_NAME);
    } catch (e) {
      return false;
    }
  }, [src]);

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <div
      css={[styles.root, bc.hideControls && isYouTube && styles.rootYoutube]}
    >
      {bc.hideControls && isYouTube && isEnded && (
        <div css={styles.placeholder}>
          <p css={styles.placeholderTitle}>{bc.placeholder}</p>
        </div>
      )}
      <ReactPlayer
        url={src}
        onStart={() => setIsEnded(false)}
        onEnded={() => setIsEnded(true)}
        config={
          [bc.hideControls] && {
            youtube: {
              playerVars: {
                controls: 0,
                disablekb: 1,
              },
            },
          }
        }
        playIcon={<div css={styles.playButton} onClick={handlePlay}></div>}
        light={bc.hideControls && !bc.autoplay && isYouTube}
        controls
        width="100%"
        height="100%"
        playing={playing || bc.autoplay}
        muted={bc.muted}
      />
    </div>
  );
}
