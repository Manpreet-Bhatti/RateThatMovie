import { usePagination, ELLIPSES } from "../../hooks/usePagination";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 2,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div>
      {currentPage !== 1 && (
        <div onClick={onPrevious}>
          <MdNavigateBefore />
        </div>
      )}
      {paginationRange.map((page) => {
        if (page === ELLIPSES) return <BiDotsHorizontalRounded />;

        return (
          <div key={page} onClick={() => onPageChange(page)}>
            {page}
          </div>
        );
      })}
      {currentPage !== lastPage && (
        <div onClick={onNext}>
          <MdNavigateNext />
        </div>
      )}
    </div>
  );
};

export default Pagination;
