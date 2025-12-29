import orders from "../../data/mockOrders";
import { CheckCircle, XCircle } from "lucide-react";

export default function OrdersList() {
  return (
    <div className="space-y-4">
      {orders.map(order => (
        <div
          key={order.id}
          className="
            bg-white rounded-xl
            border border-orange-100
            shadow-sm
            hover:shadow-md
            transition-all
            p-5
          "
        >
          {/* TOP */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="font-semibold text-gray-800">
                {order.user}
              </p>
              <p className="text-sm text-orange-600 font-medium">
                {order.type}
              </p>
            </div>

            <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
              Pending
            </span>
          </div>

          {/* DETAILS */}
          <div className="text-sm text-gray-600 space-y-1 mb-4">
            {order.trip && (
              <p>
                <span className="font-medium text-gray-700">
                  Trip:
                </span>{" "}
                {order.trip}
              </p>
            )}

            {order.guide && (
              <p>
                <span className="font-medium text-gray-700">
                  Guide:
                </span>{" "}
                {order.guide}
              </p>
            )}

            {order.menu && (
              <p>
                <span className="font-medium text-gray-700">
                  Menu:
                </span>{" "}
                {order.menu}
              </p>
            )}

            {order.restaurant && (
              <p>
                <span className="font-medium text-gray-700">
                  Restaurant:
                </span>{" "}
                {order.restaurant}
              </p>
            )}
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3">
            <button
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-lg
                bg-green-500
                text-white
                hover:bg-green-600
                transition
              "
            >
              <CheckCircle size={18} />
              Confirm
            </button>

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
              <XCircle size={18} />
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
