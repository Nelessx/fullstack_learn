import React from "react";
import {
  Laptop,
  Plane,
  ClubIcon as Football,
  Briefcase,
  BarChart2,
  Flame,
  Rocket,
  Newspaper,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  icon: LucideIcon;
  label: string;
  color: string;
};

const navItems: NavItem[] = [
  { icon: Laptop, label: "Technology", color: "text-blue-600" },
  { icon: Plane, label: "Travel", color: "text-orange-500" },
  { icon: Football, label: "Sport", color: "text-green-500" },
  { icon: Briefcase, label: "Business", color: "text-purple-500" },
  { icon: BarChart2, label: "Management", color: "text-pink-500" },
  { icon: Flame, label: "Trends", color: "text-red-500" },  
  { icon: Rocket, label: "Startups", color: "text-yellow-500" },
  { icon: Newspaper, label: "News", color: "text-blue-400" },
];

export default function Topics() {
  return (
    <div className=" py-10 w-8/12 mx-auto flex flex-col gap-6 items-center text-center">
      <p className="text-gray-500 text-xs font-semibold mt-4 max-w-2xl">
        EXPLORE TRENDING TOPICS
      </p>

      <div className="flex flex-wrap gap-6 p-4 items-center justify-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gray-600/40 rounded-full ring-2 ring-blue-500/10  hover:ring-2 hover:ring-blue-500/50  transition-shadow"
            >
              <Icon className={`w-5 h-5 ${item.color}`} />
              <span className="text-lg font-semibold text-[#ffffff]/80">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
