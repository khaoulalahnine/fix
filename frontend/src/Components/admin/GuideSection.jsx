import { useState } from "react";
import TripForm from "./forms/TripForm";

export default function GuideSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button
        className="bg-black text-white px-4 py-2 mb-4"
        onClick={() => setShowForm(!showForm)}
      >
        Add Trip
      </button>

      {showForm && <TripForm />}
    </div>
  );
}
