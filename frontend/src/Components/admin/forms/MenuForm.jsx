export default function MenuForm() {
  return (
    <form className="space-y-3 max-w-md">
      <input className="border p-2 w-full" placeholder="Dish name" />
      <input className="border p-2 w-full" placeholder="Price" />
      <textarea className="border p-2 w-full" placeholder="Ingredients" />
      <button className="bg-black text-white px-4 py-2">Save</button>
    </form>
  );
}
