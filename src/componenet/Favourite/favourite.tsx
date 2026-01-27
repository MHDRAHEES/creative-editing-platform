import { useEffect, useState } from "react";
// import MediaCard from "../Modal/media_card";
import { useFavorites } from "../../context/FavoriteContext";

interface MediaItem {
  _id: string;
  caption: string;
  fileUrl: string;
  fileType: string;
}

function Favourite() {
  const { favorites } = useFavorites();
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);

  /* ======================
     FETCH ALL MEDIA
  ====================== */
  useEffect(() => {
    fetch('http://localhost:5000/api/favourites')
      .then(res => res.json())
      .then(data => {
        setMediaList(Array.isArray(data) ? data : data.media || []);
      })
      .catch(err => console.error(err));
  }, []);

  /* ======================
     FILTER FAVORITES
  ====================== */
  const favoriteMedia = mediaList.filter(media =>
    favorites.includes(media._id)
  );
console.log(favoriteMedia,"jjjjjjjjjjj");

  return (
    <div className="p-6 min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-4">❤️ Favourite Media</h1>
       <h1 className="text-xl font-bold mb-4">Feature under development
</h1>
{/* 
      {favoriteMedia.length === 0 ? (
        <p className="text-gray-600">No favourites yet</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favoriteMedia.map(media => (
            <MediaCard
              key={media._id}
              fileUrl={media.fileUrl}
              fileType={media.fileType}
              caption={media.caption}
              id={media._id}
              onDelete={() => {}} // ❌ no delete on favorites page
            />
          ))}
        </div>
      )} */}
    </div>
  );
}

export default Favourite;
