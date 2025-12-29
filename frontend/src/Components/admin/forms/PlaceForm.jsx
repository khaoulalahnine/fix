export default function PlaceForm() {
  return (
    <form className="space-y-3 max-w-md">
      <input className="border p-2 w-full" placeholder="Place name" />
      <input className="border p-2 w-full" placeholder="City" />
      <input type="file" className="border p-2 w-full" />
      <textarea className="border p-2 w-full" placeholder="Description" />
      <button className="bg-black text-white px-4 py-2">Save</button>
    </form>
  );
}
