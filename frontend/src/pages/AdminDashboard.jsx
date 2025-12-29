import { useState } from "react";
import AdminTabs from "../Components/admin/AdminTabs";

import UsersList from "../components/admin/UsersList";
import OrdersList from "../components/admin/OrdersList";
import GuideSection from "../components/admin/GuideSection";
import RestoSection from "../components/admin/RestoSection";
import PlacesSection from "../components/admin/PlacesSection";
import ArtisanSection from "../Components/admin/artisan/ArtisanSection";


export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "users" && <UsersList />}
      {activeTab === "orders" && <OrdersList />}
      {activeTab === "artisan" && <ArtisanSection />}
      {activeTab === "guide" && <GuideSection />}
      {activeTab === "resto" && <RestoSection />}
      {activeTab === "places" && <PlacesSection />}
    </div>
  );
}
