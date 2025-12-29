import { useState } from "react";
import PlaceForm from "./forms/PlaceForm";

export default function PlacesSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button
        className="bg-black text-white px-4 py-2 mb-4"
        onClick={() => setShowForm(!showForm)}
      >
        Add Place
      </button>

      {showForm && <PlaceForm />}
    </div>
  );
}
