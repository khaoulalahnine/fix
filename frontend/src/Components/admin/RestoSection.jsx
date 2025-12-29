import { useState } from "react";
import MenuForm from "./forms/MenuForm";

export default function RestoSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button
        className="bg-black text-white px-4 py-2 mb-4"
        onClick={() => setShowForm(!showForm)}
      >
        Add Menu
      </button>

      {showForm && <MenuForm />}
    </div>
  );
}
