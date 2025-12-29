import { useState } from "react";

const craftTypes = ["Pottery", "Textile", "Leatherwork", "Jewelry", "Woodwork", "Metalwork"];
const cities = ["Marrakech", "Fes", "Rabat", "Essaouira", "Agadir"];

export default function ArtisanProfileForm({ onAdd, onClose }) {
  const [form, setForm] = useState({
    name: "",
    craftType: "",
    city: "",
    description: "",
    workingHours: "",
    workshopAvailable: false,
    picture: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ id: Date.now(), ...form, products: [], activities: [], posts: [] });
  };

  return (
    <div className="relative bg-white rounded-xl shadow-xl p-6 w-full max-w-sm space-y-4">
      <h2 className="text-xl font-bold text-gray-800 text-center">Add Artisan Profile</h2>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-orange-300 outline-none" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />

        <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-orange-300 outline-none" value={form.craftType} onChange={e => setForm({ ...form, craftType: e.target.value })} required>
          <option value="">Select Craft Type</option>
          {craftTypes.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-orange-300 outline-none" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} required>
          <option value="">Select City</option>
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <textarea placeholder="Description" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-orange-300 outline-none h-16 resize-none" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />

        <input type="text" placeholder="Working Hours (e.g., 9:00-17:00)" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-orange-300 outline-none" value={form.workingHours} onChange={e => setForm({ ...form, workingHours: e.target.value })} />

        <div className="flex items-center gap-2">
          <input type="checkbox" checked={form.workshopAvailable} onChange={e => setForm({ ...form, workshopAvailable: e.target.checked })} className="h-4 w-4 accent-orange-500 rounded" />
          <label className="text-gray-700 font-medium">Workshop Available</label>
        </div>

        <div className="flex items-center gap-2">
          {form.picture && <img src={form.picture} alt="Preview" className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-sm" />}
          <input type="file" accept="image/*" className="w-full border border-gray-300 rounded-lg p-2" onChange={e => setForm({ ...form, picture: URL.createObjectURL(e.target.files[0]) })} />
        </div>

        <div className="flex justify-end gap-2 mt-2">
          <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">Save</button>
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">Cancel</button>
        </div>
      </form>
    </div>
  );
}
