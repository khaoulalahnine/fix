import { useState } from "react";

export default function ProductForm({ onSubmit, onClose }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    pictures: [],
    stock: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: Date.now(), ...form });
    onClose(); // close modal after saving
    setForm({ name: "", price: "", description: "", pictures: [], stock: "" });
  };

  const handleAddPictures = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setForm({ ...form, pictures: [...form.pictures, ...urls] });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-4 w-full max-w-sm space-y-3 relative">
      <h3 className="text-lg font-semibold text-center">Add Product</h3>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-2 rounded-lg focus:ring-1 focus:ring-orange-300 outline-none"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Price"
          className="w-full border p-2 rounded-lg focus:ring-1 focus:ring-orange-300 outline-none"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          className="w-full border p-2 rounded-lg focus:ring-1 focus:ring-orange-300 outline-none"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded-lg focus:ring-1 focus:ring-orange-300 outline-none"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="file"
          accept="image/*"
          multiple
          className="w-full border p-2 rounded-lg"
          onChange={handleAddPictures}
        />
        {form.pictures.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {form.pictures.map((pic, i) => (
              <img key={i} src={pic} alt={`preview-${i}`} className="w-16 h-16 rounded object-cover border" />
            ))}
          </div>
        )}
        <div className="flex justify-end gap-2 mt-2">
          <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">Save</button>
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded-lg hover:bg-gray-100">Cancel</button>
        </div>
      </form>
    </div>
  );
}
