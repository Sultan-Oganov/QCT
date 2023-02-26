import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { useField, useFieldProps } from '@qctoken/form';
import { ClassProps } from '@qctoken/register';
import { observer, Observer } from '@qctoken/store';
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import DragAndDIcon from './assets/svg/DragAndDIcon';
import { canvasPreview } from './canvasPreview';
import { ImageFieldNameType } from './types';
import CloseIcon from './assets/svg/CloseIcon';
import { useStyles } from './ImageField.styles';
import { useDropzone } from 'react-dropzone';

const centerAspectCrop = (
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) => {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 100,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );
};

export const ImageField = observer(function ImageField(
  props: ClassProps<ImageFieldNameType>,
) {
  const { bc, pageStore } = props;
  const styles = useStyles(bc);

  const field = useField<string | File | any>({
    name: bc.name,
    value: '',
    type: 'file',
  });
  const [value] = useFieldProps(field);

  const [imgSrc, setImgSrc] = useState('');
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const isDirty = field.isDirty;
  const isReseted = field.isReseted;

  const aspect = useMemo(() => {
    const data = bc.size?.split(' ') || '1 1'.split(' ');
    return parseInt(data[0]) / parseInt(data[1]);
  }, []);

  const onImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (aspect) {
      const { width, height } = event.currentTarget;

      setCrop(centerAspectCrop(width, height, aspect));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        try {
          canvasPreview(
            imgRef.current,
            previewCanvasRef.current,
            completedCrop,
          );
          previewCanvasRef.current.toBlob((blob: any) => {
            const newImage = new File([blob], blob.name, { type: blob.type });
            field.setValue(newImage);
          });
        } catch (e) {
          console.error(e);
        }
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [completedCrop]);

  useEffect(() => {
    if (isReseted === true) {
      setImgSrc('');
    }
  }, [isReseted]);

  const onClearFile = () => {
    field.setValue('');
    setImgSrc('');
    field.changeResetState(false);
  };

  const onDrop = useCallback((acceptedFiles: any[]) => {
    field.changeIsDirty(true);
    field.changeResetState(false);
    if (acceptedFiles) {
      acceptedFiles.forEach((item) => {
        setCrop(undefined);
        setImgSrc(URL.createObjectURL(item));
      });
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg'] },
  });

  return (
    <div css={styles.root}>
      <div>
        {Boolean(completedCrop) && (
          <canvas ref={previewCanvasRef} css={styles.canvas} />
        )}
      </div>
      {Boolean(imgSrc) || Boolean(value) ? (
        <div css={styles.imgFill}>
          <button onClick={onClearFile} css={styles.closeBtn}>
            <CloseIcon />
          </button>

          {isDirty && !isReseted ? (
            <ReactCrop
              css={styles.crop}
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspect}
              locked={!bc.resize}
            >
              <img
                css={styles.image}
                ref={imgRef}
                alt={pageStore.translate('Crop me')}
                src={
                  imgSrc ||
                  (typeof value === 'object'
                    ? URL.createObjectURL(value)
                    : value)
                }
                onLoad={onImageLoad}
              />
            </ReactCrop>
          ) : (
            <img
              css={styles.image}
              ref={imgRef}
              alt={pageStore.translate('Crop me')}
              src={
                typeof value === 'object' ? URL.createObjectURL(value) : value
              }
              onLoad={onImageLoad}
            />
          )}
        </div>
      ) : (
        <div css={styles.label} {...getRootProps()}>
          <input {...getInputProps()} name={bc.name} multiple={false} />
          <DragAndDIcon />
          <p css={styles.label_text}>Перетащите или</p>
          <div css={styles.labelButton}>Выберите изображение</div>
        </div>
      )}
      {bc.label && <p css={styles.labelText}>{bc.label}</p>}
      <Observer
        render={() => (
          <div
            title={
              field.errors.length > 0
                ? pageStore.translate(field.errors[0].msg)
                : undefined
            }
            css={styles.errorText}
          >
            {field.errors.length > 0 &&
              `* ${pageStore.translate(field.errors[0].msg)}`}
          </div>
        )}
      />
    </div>
  );
});
