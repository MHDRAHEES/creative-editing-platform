import React, { useEffect, useState } from "react";
import UploadModal from "../../Modal/upload_modal";
import MediaCard from "../../Modal/media_card";
import { useNavigate } from "react-router-dom";

interface MediaItem {
  caption:string;
  fileUrl: string;
  fileType: string;
  _id:any;
  onDelete: (id: string) => void;
}

function ProductDetails() {
const navigate=useNavigate();
const [showModal, setShowModal] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
const [mediaList, setMediaList] = useState<MediaItem[]>([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchMedia = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/media", {
        headers: token
          ? { Authorization: `Bearer ${token}` }
          : {},
      });

      const data = await res.json();
      console.log("MEDIA API DATA:", data);
   
      if (data.isLoggedIn === false) {
        setIsLoggedIn(false);
        setMediaList([]);
        return;
      }

      // 🟢 Logged in and data is array
      if (Array.isArray(data)) {
        setIsLoggedIn(true);
        setMediaList(data);
      } else if (data.success && Array.isArray(data.media)) {
        setIsLoggedIn(true);
        setMediaList(data.media);
      } else {
        setIsLoggedIn(true);
        setMediaList([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  fetchMedia();
}, []);

const handleRemoveMedia = (id: string) => {
  setMediaList(prev => prev.filter(item => item._id !== id));
};


  return (
  <div className='p-6'>
  {/* {mediaList.length===0 ? (null):( */}
    <button
      onClick={() => setShowModal(true)}
      className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 text-white px-4 py-2 rounded"
    >
      ➕ Add Media
    </button>
  {/* // )} */}

    {showModal && (
      <UploadModal
        onClose={() => setShowModal(false)}
        onUpload={() => setShowModal(false)}
      />
    )}
{mediaList.length === 0 ? (
  <div className="mt-6 text-black text-center">
    <p>No media found</p>
    <p>Please login</p>

    <button
      onClick={() => navigate("/login")}
      className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 text-white px-4 py-2 rounded"
    >
      Go to Login
    </button>
  </div>
) : (
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {mediaList.map((media, index) => (
      <MediaCard
        key={index}
        fileUrl={media.fileUrl}
        fileType={media.fileType}
        caption={media.caption}
        id={media._id}
       onDelete={handleRemoveMedia}
      />
    ))}
  </div>
)}
  </div>
);
}

export default ProductDetails;
