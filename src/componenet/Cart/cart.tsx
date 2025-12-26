import { useEffect, useState } from "react";

function Cart() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/auth/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log("User info:", data.user);
      setUser(data.user);
    };

    getUser();
  }, []);
console.log(user,"jjjjjjjjj");

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
}

export default Cart;
