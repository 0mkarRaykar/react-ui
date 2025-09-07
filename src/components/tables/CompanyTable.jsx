import React from "react";
import { Building2 } from "lucide-react";

export const CompanyTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="p-4 text-gray-500">No companies available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-gray-500 border-b">
          <tr>
            {[
              "Company Name",
              "Revenue",
              "Net Profit",
              "EBITDA",
              "Cash Flow",
              "WC Cycle",
            ].map((h) => (
              <th key={h} className="py-2">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((c, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="py-3 font-medium flex items-center gap-2">
                <Building2 className="w-4 h-4 text-sky-600" />
                {c.company}
              </td>
              <td className="py-3">{c.revenue}</td>
              <td
                className={`py-3 ${
                  c.profit.startsWith("-") ? "text-red-500" : "text-green-600"
                }`}
              >
                {c.profit}
              </td>
              <td className="py-3">{c.ebitda}</td>
              <td className="py-3">{c.cashFlow}</td>
              <td className="py-3">{c.wcCycle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
