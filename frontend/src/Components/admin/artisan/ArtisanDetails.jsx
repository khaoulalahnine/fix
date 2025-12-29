import { useState } from "react";
import ProductForm from "../forms/ProductForm";
import ActivityForm from "../forms/ActivityForm";
import PostForm from "../forms/PostForm";

export default function ArtisanDetails({ artisan, onUpdate, onDelete }) {
  const [openForm, setOpenForm] = useState(null);
  const [products, setProducts] = useState(artisan.products || []);
  const [activities, setActivities] = useState(artisan.activities || []);
  const [posts, setPosts] = useState(artisan.posts || []);

  const handleAdd = (type, data) => {
    let updatedProducts = products;
    let updatedActivities = activities;
    let updatedPosts = posts;

    if (type === "product") updatedProducts = [...products, data];
    if (type === "activity") updatedActivities = [...activities, data];
    if (type === "post") updatedPosts = [...posts, data];

    setProducts(updatedProducts);
    setActivities(updatedActivities);
    setPosts(updatedPosts);

    onUpdate({
      ...artisan,
      products: updatedProducts,
      activities: updatedActivities,
      posts: updatedPosts,
    });

    setOpenForm(null); // closes modal after save
  };

  return (
    <>
      {/* Buttons */}
      <div className="flex justify-center items-center w-full h-full">
        <div className="inline-flex items-center gap-2 bg-white p-3 rounded-xl shadow">

          <button onClick={() => setOpenForm("product")} className="px-3 py-1.5 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition flex items-center gap-1">
            Add Product <span className="bg-white text-orange-500 px-2 py-0.5 rounded-md text-xs">{products.length}</span>
          </button>

          <button onClick={() => setOpenForm("activity")} className="px-3 py-1.5 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition flex items-center gap-1">
            Add Activity <span className="bg-white text-orange-500 px-2 py-0.5 rounded-md text-xs">{activities.length}</span>
          </button>

          <button onClick={() => setOpenForm("post")} className="px-3 py-1.5 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition flex items-center gap-1">
            Add Post <span className="bg-white text-orange-500 px-2 py-0.5 rounded-md text-xs">{posts.length}</span>
          </button>

          <button className="px-3 py-1.5 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            View Profile
          </button>

          <button onClick={() => onDelete && onDelete(artisan.id)} className="px-3 py-1.5 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>

      {/* Modals */}
      {openForm === "product" && (
        <ModalForm onClose={() => setOpenForm(null)}>
          <ProductForm onSubmit={(data) => handleAdd("product", data)} onClose={() => setOpenForm(null)} />
        </ModalForm>
      )}
      {openForm === "activity" && (
        <ModalForm onClose={() => setOpenForm(null)}>
          <ActivityForm onSubmit={(data) => handleAdd("activity", data)} onClose={() => setOpenForm(null)} />
        </ModalForm>
      )}
      {openForm === "post" && (
        <ModalForm onClose={() => setOpenForm(null)}>
          <PostForm onSubmit={(data) => handleAdd("post", data)} onClose={() => setOpenForm(null)} />
        </ModalForm>
      )}
    </>
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
