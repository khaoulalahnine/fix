import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArtisans, addArtisan, updateArtisan, deleteArtisan } from "../../../features/artisan/artisanSlice";;
import ArtisanProfileForm from "./ArtisanProfileForm";
import ArtisanDetails from "./ArtisanDetails";

export default function ArtisanSection() {
  const dispatch = useDispatch();
  const { artisans, loading } = useSelector((state) => state.artisan);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchArtisans());
  }, [dispatch]);

  const handleAdd = (artisanData) => {
    dispatch(addArtisan(artisanData));
    setShowForm(false);
  };

  const handleUpdate = (id, data) => {
    dispatch(updateArtisan({ id, data }));
  };

  const handleDelete = (id) => {
    dispatch(deleteArtisan(id));
  };

  return (
    <div className="space-y-5 relative font-sans">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 tracking-tight">Artisan Management</h2>
        <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
          + Add Artisan
        </button>
      </div>

      {loading ? <p>Loading...</p> : (
        <div className="space-y-3">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm border p-3 gap-3">
              <div className="flex-1 flex items-center gap-3">
                {artisan.picture ? (
                  <img src={artisan.picture} alt={artisan.name} className="w-14 h-14 rounded-lg object-cover border" />
                ) : (
                  <div className="w-14 h-14 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-semibold">
                    {artisan.name[0]}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{artisan.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded">{artisan.craftType}</span>
                    <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded">{artisan.city}</span>
                    <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded">{artisan.workingHours}</span>
                    {artisan.workshopAvailable && <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">Workshop</span>}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col bg-gray-50 rounded-lg p-3">
                <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2 text-center">Profile Actions</h3>
                <ArtisanDetails artisan={artisan} onUpdate={(data) => handleUpdate(artisan.id, data)} onDelete={handleDelete} />
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <ModalForm onClose={() => setShowForm(false)}>
          <ArtisanProfileForm onAdd={handleAdd} onClose={() => setShowForm(false)} />
        </ModalForm>
      )}
    </div>
  );
}

function ModalForm({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20" onClick={onClose}></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
