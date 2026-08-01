"use client";

import { useEffect, useState } from "react";
import { Package, ShoppingCart, Users, TrendingUp } from "lucide-react";

const STATS = [
  {
    label: "Total Orders",
    value: "1,284",
    change: "+12.4%",
    icon: ShoppingCart,
  },
  { label: "Products", value: "342", change: "+3.1%", icon: Package },
  { label: "Customers", value: "8,921", change: "+8.7%", icon: Users },
  { label: "Revenue", value: "৳4.2L", change: "+18.9%", icon: TrendingUp },
];

const DISPLAY_FONT =
  "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

export default function AdminDashboardPage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("adminEmail") || "");
  }, []);

  return (
    <div>
      <h2
        className="text-[#0E1116] text-2xl tracking-tight mb-1"
        style={{ fontFamily: DISPLAY_FONT }}
      >
        Welcome back{email ? `, ${email.split("@")[0]}` : ""}
      </h2>
      <p className="text-[#6B7280] text-sm mb-8">
        Here&apos;s what&apos;s happening across your operations today.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-[#E5E3DE] p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#0E1116] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#E8A33D]" strokeWidth={2} />
                </div>
                <span className="text-[11px] font-medium text-[#16A34A] bg-[#F0FDF4] px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-[#0E1116] text-2xl font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="text-[#9CA3AF] text-[13px] mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl border border-[#E5E3DE] p-6">
        <h3 className="text-[#0E1116] text-sm font-medium mb-1">
          This is a placeholder content area
        </h3>
        <p className="text-[#9CA3AF] text-[13px]">
          Replace this section with your real charts, tables, or activity feed.
          The sidebar and topbar around it stay fixed on every route under{" "}
          <code className="bg-[#F7F5F2] px-1.5 py-0.5 rounded">/admin</code>.
        </p>
      </div>
    </div>
  );
}
