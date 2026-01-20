import React, { useEffect, useState } from "react";
import UploadModal from "../../../Modal/upload_modal";
import MediaCard from "../../../Modal/media_card";
import { useNavigate } from "react-router-dom";

interface MediaItem {
  _id: string;
  caption: string;
  fileUrl: string;
  fileType: string;
}

interface User {
  _id: string;
  fullName: string;
  email: string;
}

function ProductDetails() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [showModal, setShowModal] = useState(false);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  /* ======================
     FETCH USER
  ====================== */
  const getUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (data.success) setUser(data.user);
    } catch (err) {
      setUser(null);
    }
  };

  /* ======================
     FETCH MEDIA
  ====================== */
const fetchMedia = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/media", {
      headers: token
        ? { Authorization: `Bearer ${token}` }
        : {},
    });

    const data = await res.json();

    // Ensure we have an array
    const mediaArray = Array.isArray(data) ? data : data.media || [];

    // Keep only images
    const imageOnly = mediaArray.filter((x: any) =>
      x.fileType.startsWith("image/")
    );

    setMediaList(imageOnly);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchMedia();
    if (token) getUser();
  }, []);

  /* ======================
     HANDLERS
  ====================== */
  const handleUploadSuccess = () => {
    fetchMedia();
    setShowModal(false);
  };

  const handleRemoveMedia = (id: string) => {
    setMediaList(prev => prev.filter(item => item._id !== id));
  };

  /* ======================
     RENDER
  ====================== */
  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!user) {
    return (
      <div className="mt-10 text-center">
        <p>Please login to view media</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-orange-600 text-white px-4 py-2 rounded mt-4"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* ADD MEDIA */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-gradient-to-r from-orange-400 to-orange-700 text-white px-4 py-2 rounded"
      >
        ➕ Add Media
      </button>

      {showModal && (
        <UploadModal
          onClose={() => setShowModal(false)}
          onUpload={handleUploadSuccess}
        />
      )}

      {/* MEDIA GRID */}
      {!showModal&&
         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mediaList.map(media => (
          <MediaCard
            key={media._id}            // ✅ FIXED
            fileUrl={media.fileUrl}
            fileType={media.fileType}
            caption={media.caption}
            id={media._id}
            onDelete={handleRemoveMedia}
          />
        ))}
      </div>
      }
   
    </div>
  );
}

export default ProductDetails;
