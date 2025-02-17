"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { RotateCcw, X, FileCode, FileText } from "lucide-react";
import Link from "next/link";
import { DiCss3, DiHtml5, DiReact } from "react-icons/di";
import { SiJson, SiTypescript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

const initialTabs = [
  { name: "Home.html", href: "/", icon: <DiHtml5 className="text-orange-400" size={16} /> },
  { name: "About.ts", href: "/about", icon: <SiTypescript className="text-blue-400" size={16} /> },
  { name: "Portfolio.jsx", href: "/portfolio", icon: <DiReact className="text-blue-400" size={16} /> },
  { name: "Contact.json", href: "/contact", icon: <VscJson className="text-yellow-600" size={16} /> },
];

export default function Navbar() {
  const [tabs, setTabs] = useState(initialTabs);
  const pathname = usePathname();

  const closeTab = (href: string) => {
    setTabs((prev) => prev.filter((tab) => tab.href !== href));
  };

  const resetTabs = () => {
    setTabs(initialTabs);
  };

  return (
    <div className="relative w-full bg-gray-950 border-b border-gray-700">
      <div className="flex items-center px-4 py-2 space-x-2 overflow-x-auto">
        {/* Botón de reset a la izquierda */}
        {tabs.length < initialTabs.length && (
          <button
            onClick={resetTabs}
            className="text-gray-400 hover:text-white transition"
          >
            <RotateCcw size={18} />
          </button>
        )}

        {/* Pestañas estilo VS Code */}
        {tabs.map((tab) => (
          <motion.div
            key={tab.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className={`group flex items-center px-3 py-1.5 text-sm rounded-t-md border border-gray-700
            ${
              pathname === tab.href
                ? "bg-[#252526] text-white border-b-white"
                : "bg-[#2d2d2d] text-gray-400 border-b-gray-700"
            }`}
          >
            {tab.icon}
            <Link href={tab.href} className="ml-2 mr-2">
              {tab.name}
            </Link>
            <button
              onClick={() => closeTab(tab.href)}
              className="opacity-50 group-hover:opacity-100 transition-opacity"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
