import React, { Suspense, useState } from "react";
import { Button } from "@tremor/react";
import DashboardPage from "../pages/DashboardPage";
import CompanyPage from "../pages/CompanyPage";

const LazyDashboard = React.lazy(() =>
  Promise.resolve({ default: DashboardPage })
);
const LazyCompany = React.lazy(() => Promise.resolve({ default: CompanyPage }));

export default function App() {
  const [route, setRoute] = useState("dashboard");
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      {route === "dashboard" && <LazyDashboard />}
      {route === "company" && <LazyCompany />}

      <div className="fixed bottom-6 right-6 flex gap-2">
        <Button
          className="bg-white border"
          onClick={() => setRoute("dashboard")}
        >
          Dashboard
        </Button>
        <Button className="bg-white border" onClick={() => setRoute("company")}>
          Companies
        </Button>
      </div>
    </Suspense>
  );
}
