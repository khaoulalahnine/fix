export default function TripForm() {
  return (
    <form className="space-y-4 max-w-lg">
      <input
        className="border p-2 w-full"
        placeholder="Trip name"
      />
      <input
        className="border p-2 w-full"
        placeholder="Location"
      />
      <input
        type="file"
        className="border p-2 w-full"
      />
      <textarea
        className="border p-2 w-full"
        placeholder="Description"
      />
      <button className="bg-black text-white px-4 py-2">
        Save
      </button>
    </form>
  );
}
