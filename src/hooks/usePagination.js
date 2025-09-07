import { useState, useMemo } from "react";

export default function usePagination(items = [], pageSize = 10) {
  const [page, setPage] = useState(1);
  const max = Math.ceil(items.length / pageSize);
  const current = useMemo(
    () => items.slice((page - 1) * pageSize, page * pageSize),
    [items, page, pageSize]
  );
  return { page, setPage, max, current };
}
