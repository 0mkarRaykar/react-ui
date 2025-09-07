import React from "react";

export const EntityTable = () => (
  <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
    <h3 className="text-sm font-medium mb-2">Entity-wise Performance</h3>
    <table className="w-full text-sm text-left border-collapse">
      <thead>
        <tr className="border-b">
          <th className="p-2">Company Name</th>
          <th className="p-2">Revenue</th>
          <th className="p-2">Net Profit</th>
          <th className="p-2">EBITDA</th>
          <th className="p-2">Cash Flow</th>
          <th className="p-2">WC Cycle</th>
        </tr>
      </thead>
      <tbody>
        {company.map((c, i) => (
          <tr key={i} className="border-b hover:bg-gray-50">
            <td className="p-2 font-medium">{c.name}</td>
            <td className="p-2">{c.revenue}</td>
            <td className="p-2">{c.profit}</td>
            <td
              className={`p-2 ${
                c.ebitda.startsWith("-") ? "text-red-500" : "text-green-600"
              }`}
            >
              {c.ebitda}
            </td>
            <td className="p-2">{c.cash}</td>
            <td className="p-2">{c.wc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
