import { motion } from "framer-motion";

export default function AdminTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "users", label: "Users" },
    { id: "orders", label: "Orders" },
    { id: "artisan", label: "Artisan" },
    { id: "guide", label: "Guide" },
    { id: "resto", label: "Restaurant" },
    { id: "places", label: "Places" },
  ];

  return (
    <div className="relative mb-8">
      {/* Background strip */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50" />

      <div className="relative flex gap-2 p-2 rounded-xl overflow-x-auto">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`
                relative px-5 py-2 rounded-lg text-sm font-medium transition-all
                ${
                  isActive
                    ? "text-white"
                    : "text-orange-700 hover:bg-orange-200/60"
                }
              `}
            >
              {/* Active pill */}
              {isActive && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 shadow-md"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}

              <span className="relative z-10 tracking-wide">
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
