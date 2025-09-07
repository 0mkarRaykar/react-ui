// Dashboard.jsx
import React from "react";
import Card from "../components/common/Card";
import { RevenueLineChart } from "../components/charts/RevenueLineChart";
import { MarginBarChart } from "../components/charts/MarginBarChart";
import { CompanyTable } from "../components/tables/CompanyTable";
import { mockCompany } from "../data/mockDataCompany";
import { mockMarginData } from "../data/mockDataMargin";
import { mockRevenueData } from "../data/mockDataRevenue";
import FinanceCards from "../components/tables/FinancialCard";

const DashBoard = () => {
  return (
    <div className="space-y-6">
      <FinanceCards />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <Card>
            <div className="text-sm text-gray-500 mb-2">Revenue Trend</div>
            <RevenueLineChart data={mockRevenueData} height={300} />
          </Card>
        </div>

        <div className="xl:col-span-1">
          <Card>
            <div className="text-sm text-gray-500 mb-2">Margin Analysis</div>
            <MarginBarChart data={mockMarginData} height={300} />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="Company Overview">
            <CompanyTable data={mockCompany} />
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card title="Insights">
            <p className="text-sm text-gray-600">
              Sample insight text: Monitor logistics costs and payroll.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Additional insight: Focus on high-growth sectors and cost
              optimization.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
