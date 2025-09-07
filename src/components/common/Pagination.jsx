// src/components/common/Pagination.jsx
import React from "react";
import Button from "./Button";

const Pagination = ({ page, total, perPage = 10, onPageChange }) => {
  const max = Math.ceil(total / perPage);

  if (max <= 1) return null; // hide if only 1 page

  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, total);

  // Generate page numbers
  const pages = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className="flex justify-end items-center gap-3 mt-2 text-sm">
      {/* Range Info */}
      <span className="text-gray-600">{`${start}-${end} of ${total}`}</span>

      {/* Prev Button */}
      <Button
        variant="secondary"
        className="px-3 py-1"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        Prev
      </Button>

      {/* Page Numbers */}
      <div className="flex gap-1">
        {pages.map((p) => (
          <Button
            key={p}
            variant={page === p ? "primary" : "secondary"}
            className="px-3 py-1"
            onClick={() => onPageChange(p)}
          >
            {p}
          </Button>
        ))}
      </div>

      {/* Next Button */}
      <Button
        variant="secondary"
        className="px-3 py-1"
        onClick={() => onPageChange(Math.min(max, page + 1))}
        disabled={page === max}
      >
        Next
      </Button>
    </div>
  );
};

export { Pagination };
export default Pagination;
