import { useState, useCallback, useMemo } from 'react';
import { useField, useFieldProps } from '@qctoken/form';
import { makeBC, mapComponentOne, ClassProps } from '@qctoken/register';
import { Observer } from '@qctoken/store';
import { useTheme } from '@qctoken/theme';
import { useDropzone } from 'react-dropzone';
import type { FileFieldNameType } from './types';
import DragAndDIcon from './assets/svg/DragAndDIcon';
import CloseIcon from './assets/svg/CloseIcon';

export function FileField(props: ClassProps<FileFieldNameType>) {
  const { bc, pageStore } = props;
  const theme = useTheme();
  const [file, setFile] = useState<any>('');
  const field = useField({ name: bc.name, value: file, type: 'file' });
  const [value] = useFieldProps(field);

  const onClearFile = () => {
    field.setValue('');
    setFile('');
  };

  const onDrop = useCallback((acceptedFiles: any[]) => {
    if (acceptedFiles) {
      acceptedFiles.forEach((item) => {
        setFile(URL.createObjectURL(item));
        field.setValue(item);
      });
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept:
      bc.fileType === 'video'
        ? {
            'video/mp4': ['.mp4', '.MP4'],
          }
        : { 'image/*': ['.png', '.jpg', '.jpeg'] },
  });

  const src = useMemo(
    () =>
      typeof value === 'object'
        ? window.URL.createObjectURL(new Blob([value]))
        : value,
    [value],
  );

  return (
    <div
      css={{
        display: 'flex',
        width: '100%',
        minWidth: 0,
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {value ? (
        <div
          css={[
            {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
              border: `2px dashed ${theme.colors.common.stroke}`,
              padding: theme.spacing(bc.spacing),
              textAlign: 'center',
              width: '100%',
              boxSizing: 'border-box',
            },
            bc.disabled && {
              pointerEvents: 'none',
              backgroundColor: theme.colors.disabled.background,
            },
            bc.height && {
              height: bc.height,
            },
          ]}
        >
          {!bc.disabled && (
            <button
              type="button"
              onClick={onClearFile}
              css={[
                {
                  border: 'none',
                  background: 'transparent',
                  padding: 0,
                  margin: 0,
                  cursor: 'pointer',
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  zIndex: 10,
                },
              ]}
            >
              <CloseIcon />
            </button>
          )}

          {bc.fileType === 'video' ? (
            mapComponentOne(
              makeBC('QCT.COMMON.PLAYER', {
                pageObjectId: 'Player',
                objectId: 'Player',
                //@ts-ignore
                width: '100%',
                height: '100%',
                src,
                autoplay: true,
                muted: true,
                hideControls: false,
              }),
              props,
            )
          ) : (
            <img
              css={{
                width: bc.imgWidth,
                height: bc.imgHeight,
                objectFit: 'contain',
              }}
              src={src}
            />
          )}
        </div>
      ) : (
        <div
          css={[
            {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
              border: `2px dashed ${theme.colors.common.stroke}`,
              padding: theme.spacing(bc.spacing),
              textAlign: 'center',
              cursor: 'pointer',
              width: '100%',
              boxSizing: 'border-box',
            },
            bc.disabled && {
              backgroundColor: theme.colors.disabled.background,
              pointerEvents: 'none',
              opacity: '0.5',
            },
            bc.height && {
              height: bc.height,
            },
          ]}
          {...getRootProps()}
        >
          <input {...getInputProps()} name={bc.name} />
          {bc.showIcon && <DragAndDIcon />}
          <p
            css={{
              color: theme.colors.text.disabled,
              fontSize: 16,
              letterSpacing: '0.003em',
            }}
          >
            Перетащите документ или
          </p>
          <div
            css={[
              {
                width: bc.btnWidht || '100%',
                maxWidth: '100%',
                padding: theme.spacing(4.5, 0),
                borderRadius: 16,
                fontWeight: 500,
                display: 'grid',
                placeItems: 'center',
                gap: 12,
                cursor: 'pointer',
                backgroundColor: theme.colors.primary.main,
                color: theme.colors.common.white,
                border: 'none',
                outline: 'none',
              },
              bc.disabled && {
                pointerEvents: 'none',
              },
            ]}
          >
            Выберите файл
          </div>
        </div>
      )}
      {bc.label && (
        <p
          css={[
            theme.typography.regular,
            {
              color: theme.colors.disabled.text,
              margin: theme.spacing(4, 0, 0, 0),
            },
          ]}
        >
          {bc.label}
        </p>
      )}
      {bc.extraLink && (
        <div
          css={{
            width: '100%',
            boxSizing: 'border-box',
            minWidth: 0,
            margin: theme.spacing(4, 0, 0, 0),
          }}
        >
          {mapComponentOne(
            makeBC('QCT.FORM.TEXT_FIELD', {
              pageObjectId: 'TextField',
              objectId: 'TextField',
              name: `${bc.name}`,
              label: `${bc.extraLinkLabel}`,
              htmlType: 'text',
              validators: [],
              disabled: false,
              helperText: bc.helperText,
            }),
            props,
          )}
        </div>
      )}
      {!bc.extraLink && (
        <Observer
          render={() => (
            <div
              title={
                field.errors.length > 0
                  ? pageStore.translate(field.errors[0].msg)
                  : undefined
              }
              css={{
                minHeight: 24,
                height: 24,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: theme.colors.text.error,
                padding: theme.spacing(0, 0, 0, 3),
                fontSize: 12,
                boxSizing: 'border-box',
                lineHeight: '24px',
              }}
            >
              {field.errors.length > 0 &&
                `* ${pageStore.translate(field.errors[0].msg)}`}
            </div>
          )}
        />
      )}
    </div>
  );
}
