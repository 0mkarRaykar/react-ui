import React, { useState } from "react";
import { CompanyTable } from "../components/tables/CompanyTable";
import { mockCompany } from "../data/mockDataCompany";
import Pagination from "../components/common/Pagination";

export default function CompanyPage() {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const total = mockCompany.length;

  // Slice data for current page
  const paginatedData = mockCompany.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Companies</h2>

      <Pagination
        page={page}
        total={total}
        perPage={perPage}
        onPageChange={setPage}
      />

      {/* Table */}
      <CompanyTable data={paginatedData} />

      {/* Pagination on Bottom (optional) */}
    </div>
  );
}
