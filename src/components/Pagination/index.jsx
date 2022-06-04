import { usePagination, ELLIPSES } from "../../hooks/usePagination";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import * as S from "./Pagination.styled";

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
    <S.PaginationContainer>
      {currentPage !== 1 && (
        <S.PaginationNav onClick={onPrevious}>
          <MdNavigateBefore size={"30px"} />
        </S.PaginationNav>
      )}
      {paginationRange.map((page, index) => {
        if (page === ELLIPSES) return <BiDotsHorizontalRounded key={index} />;

        return (
          <S.Pagination
            key={index}
            onClick={() => onPageChange(page)}
            selected={currentPage === page}
          >
            {page}
          </S.Pagination>
        );
      })}
      {currentPage !== lastPage && (
        <S.PaginationNav onClick={onNext}>
          <MdNavigateNext size={"30px"} />
        </S.PaginationNav>
      )}
    </S.PaginationContainer>
  );
};

export default Pagination;
