import React from 'react';

interface PaginationProps {
  total: number;
  perPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  total,
  perPage,
  currentPage = 1,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / perPage);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageLink = (page: number) => (
    <li
      key={page}
      className={`page-item ${page === currentPage ? 'active' : ''}`}
    >
      <a
        data-cy="pageLink"
        className="page-link"
        href={`#${page}`}
        onClick={e => {
          e.preventDefault();
          handlePageChange(page);
        }}
      >
        {page}
      </a>
    </li>
  );

  return (
    <ul className="pagination">
      {/* Previous Page Link */}
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={currentPage === 1 ? 'true' : 'false'}
          onClick={e => {
            e.preventDefault();
            handlePageChange(currentPage - 1);
          }}
        >
          «
        </a>
      </li>

      {/* Page Links */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        renderPageLink,
      )}

      {/* Next Page Link */}
      <li
        className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={currentPage === totalPages ? 'true' : 'false'}
          onClick={e => {
            e.preventDefault();
            handlePageChange(currentPage + 1);
          }}
        >
          »
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
