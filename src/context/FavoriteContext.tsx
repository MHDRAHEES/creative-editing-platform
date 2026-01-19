import { createContext, useContext, useEffect, useState } from "react";

type FavoriteContextType = {
  favorites: string[];
  toggleFavourite: (mediaId: string) => void;
};

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  /* ======================
     FETCH FAVORITES
  ====================== */
  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/favorite", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();
      setFavorites(data.map((item: any) => item._id));
    } catch (error) {
      console.error(error);
    }
  };

  /* ======================
     TOGGLE FAVORITE
  ====================== */
  const toggleFavourite = async (mediaId: string) => {
    // 🔥 Optimistic UI update
    setFavorites(prev =>
      prev.includes(mediaId)
        ? prev.filter(id => id !== mediaId)
        : [...prev, mediaId]
    );

    try {
      const res = await fetch(`http://localhost:5000/api/favourite/${mediaId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setFavorites(data.favorites);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavourite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoriteContext)!;
};
