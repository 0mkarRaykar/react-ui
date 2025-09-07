import React from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import Card from "../common/Card";

const FinanceCards = () => {
  const cards = [
    {
      title: "Consolidated Revenue",
      value: "€24.5B",
      change: "+8%",
      positive: true,
    },
    {
      title: "Net Profit",
      value: "€40.5M",
      change: "+15%",
      positive: true,
    },
    {
      title: "EBITDA Margin",
      value: "28%",
      change: "-9%",
      positive: false,
    },
    {
      title: "Cash Flow",
      value: "€12.5M",
      change: "+12%",
      positive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, idx) => (
        <Card key={idx}>
          <div className="text-sm text-gray-500">{card.title}</div>
          <div className="text-2xl font-semibold mt-1">{card.value}</div>
          <div
            className={`mt-2 flex items-center gap-2 ${
              card.positive ? "text-green-500" : "text-red-500"
            }`}
          >
            {card.positive ? (
              <FiTrendingUp size={18} />
            ) : (
              <FiTrendingDown size={18} />
            )}
            <span className="text-sm">{card.change}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FinanceCards;
