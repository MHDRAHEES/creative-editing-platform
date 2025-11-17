import React ,{useState,useEffect }from 'react'

function Productdetails() {

  
  const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://picsum.photos/v2/list")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);
    console.log(products,"h......");
    
  return (
    <div className="relative w-full p-6 ">
            <div className="grid grid-cols-4 gap-9 items-start justify-center">
                {products.map((pdt: any) => (
                    <div
                        key={pdt.id}
                        className="border rounded-lg p-3 shadow hover:shadow-lg transition"
                    >
                        <img
                            src={pdt.download_url}
                            alt={pdt.author}
                            className="w-full h-40 object-cover rounded mb-2"
                        />
                        <div className="flex w-full">
                            <div className="flex  ">

                                <h2 className="text-md font-semibold truncate w-40 line-clamp-2 cursor-pointer">{pdt.author}</h2>
                            </div>
                            {/* <div className=" w-full flex justify-end">  
                            <button className=" flex bg-blue-800 rounded text-sky-50 p-2 h-10 text-bold">ADD To CART</button>
                        </div> */}
                        </div>

                    </div>
                ))}
            </div>
            <div>

            </div>
        </div>
    
  )
}

export default Productdetails