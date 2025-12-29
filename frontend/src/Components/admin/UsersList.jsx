import users from "../../data/mockUsers";
import { User, Trash2, Eye } from "lucide-react";

export default function UsersList() {
  return (
    <div className="space-y-4">
      {users.map(user => (
        <div
          key={user.id}
          className="
            bg-white rounded-xl
            border border-orange-100
            shadow-sm
            hover:shadow-md hover:border-orange-300
            transition-all
            p-5
            flex items-center justify-between
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow">
              <User size={22} />
            </div>

            {/* Info */}
            <div>
              <p className="font-semibold text-gray-800">
                {user.name}
              </p>
              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3">
            {/* VIEW */}
            <button
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-lg
                bg-orange-500
                text-white
                hover:bg-orange-600
                transition
              "
            >
              <Eye size={18} />
              View
            </button>

            {/* DELETE */}
            <button
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-lg
                bg-red-500
                text-white
                hover:bg-red-600
                transition
              "
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
