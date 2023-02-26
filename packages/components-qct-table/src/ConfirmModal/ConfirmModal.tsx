import { useStyles } from './ConfirmModal.styles';

type ConfirmModalProps = {
  modalIsOpen: boolean;
  toggleModal: () => void;
  handleDelete: () => void;
  isLoading: boolean;
};

export function ConfirmModal({
  modalIsOpen,
  toggleModal,
  handleDelete,
  isLoading,
}: ConfirmModalProps) {
  const styles = useStyles();

  if (!modalIsOpen) {
    return null;
  }

  return (
    <div css={styles.root}>
      <div css={styles.modal}>
        <div css={styles.header}>
          <div css={styles.title}>
            Вы действительно хотите удалить обьект/обьекты?
          </div>
          <div css={styles.closeBtn} onClick={toggleModal}>
            ✕
          </div>
        </div>
        <div css={styles.content}>
          <div css={styles.description}>
            Вы действительно хотите удалить курс, после удаления все данные не
            восстанавливаются!
          </div>
        </div>
        <div css={styles.footer}>
          <button
            disabled={isLoading}
            css={[styles.btn, styles.deleteBtn]}
            onClick={handleDelete}
          >
            Удалить
          </button>
          <button
            disabled={isLoading}
            css={[styles.btn, styles.undoBtn]}
            onClick={toggleModal}
          >
            Оставить
          </button>
        </div>
      </div>
    </div>
  );
}
