interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (num: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const displayPages = 2; // Adjust the number of pages to display

    if (totalPages <= displayPages) {
      return pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          className={`mr-1 rounded-md px-2 ${
            currentPage === pageNumber
              ? "bg-red-500  text-white"
              : "text-gray-800 hover:bg-red-200 hover:text-white"
          }`}
        >
          <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
        </li>
      ));
    } else {
      const halfDisplay = Math.floor(displayPages / 2);
      const startPage = Math.max(currentPage - halfDisplay, 1);
      const endPage = Math.min(startPage + displayPages - 1, totalPages);

      const pages = [];
      if (startPage > 1) {
        pages.push(
          <li
            key={1}
            className="mr-1 rounded-md px-2 text-gray-800 hover:bg-red-200 hover:text-white"
          >
            <button onClick={() => onPageChange(1)}>1</button>
          </li>
        );

        if (startPage > 2) {
          pages.push(
            <li
              key="ellipsis-start"
              className="mr-1 rounded-md px-2  disabled text-gray-800"
            >
              <span>...</span>
            </li>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <li
            key={i}
            className={`mr-1 rounded-md px-2  ${
              currentPage === i
                ? "bg-red-500  text-white"
                : "text-gray-800 hover:bg-red-200 hover:text-white"
            }`}
          >
            <button onClick={() => onPageChange(i)}>{i}</button>
          </li>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push(
            <li
              key="ellipsis-end"
              className="mr-1 text-gray-800 rounded-md px-2 disabled"
            >
              <span>...</span>
            </li>
          );
        }

        pages.push(
          <li
            key={totalPages}
            className="mr-1 rounded-md px-2 text-gray-800 hover:bg-red-200 hover:text-white"
          >
            <button onClick={() => onPageChange(totalPages)}>
              {totalPages}
            </button>
          </li>
        );
      }

      return pages;
    }
  };

  return (
    <nav className="my-2 w-full">
      <ul className="flex flex-wrap justify-center items-center">
        <li
          className={`mr-1 text-gray-800 rounded-l-lg ${
            currentPage === 1
              ? "disabled"
              : "text-gray-800 hover:bg-red-200 hover:text-white"
          }`}
        >
          <button
            className="px-2 "
            onClick={() => onPageChange(currentPage - 1)}
          >
            <i className="">{"<"}</i>
          </button>
        </li>

        {renderPageNumbers()}

        <li
          className={`mr-1 text-gray-800 justify-center rounded-r-lg ${
            currentPage === totalPages
              ? "disabled"
              : "text-gray-800 hover:bg-red-200 hover:text-white"
          }`}
        >
          <button
            className="px-2"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <i className="">{">"}</i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
