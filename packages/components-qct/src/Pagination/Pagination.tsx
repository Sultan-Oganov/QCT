import { ClassProps } from '@qctoken/register';
import { observer, useModel } from '@qctoken/store';
import { useStyles } from './Pagination.styles';
import { PaginationModel } from './PaginationModel';
import { PaginationNameType } from './types';
import { DOTS, usePagination } from './hooks/usePagination';
import ArrowLeftIcon from './assets/svg/ArrowLeftIcon';
import ArrowRightIcon from './assets/svg/ArrowRightIcon';

export const Pagination = observer(function Pagination(
  props: ClassProps<PaginationNameType>,
) {
  const [store] = useModel(PaginationModel, props);
  const { setCurrentPage, currentPage, pageSize, totalCount } = store;
  const { bc } = props;

  const styles = useStyles(bc);
  const paginationRange = usePagination({
    currentPage,
    totalCount: totalCount,
    siblingCount: bc.siblingCount,
    pageSize,
  });

  if (!paginationRange || paginationRange.length < 2) {
    return null;
  }

  const lastPage = +paginationRange[paginationRange.length - 1];
  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <ul css={styles.pagination}>
      <li
        css={[styles.arrowWrap, currentPage === 1 && styles.disabled]}
        onClick={onPrevious}
      >
        <div css={styles.arrow}>
          <ArrowLeftIcon />
        </div>
      </li>
      <div css={styles.items}>
        {paginationRange.map((pageNumber: typeof DOTS | number, index) => {
          return pageNumber === DOTS ? (
            <li key={index} css={[styles.item, styles.dots]}>
              &#8230;
            </li>
          ) : (
            <li
              key={index}
              css={[styles.item, pageNumber === currentPage && styles.selected]}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      </div>
      <li
        css={[styles.arrowWrap, currentPage === lastPage && styles.disabled]}
        onClick={onNext}
      >
        <div css={styles.arrow}>
          <ArrowRightIcon />
        </div>
      </li>
    </ul>
  );
});
