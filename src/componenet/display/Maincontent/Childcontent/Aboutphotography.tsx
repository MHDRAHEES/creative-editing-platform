import React from 'react'

function Aboutphotography() {
  return (
<div className="flex justify-center min-h-screen items-start gap-8 bg-white p-8 pt-8 ">
  {/* Reels Section */}
  <div className="flex  flex-col items-center w-[350px] bg-gray-100 rounded-lg p-4 text-black shadow-md rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-100 transition-transform duration-300l̥">
    <img
      src="public/young-teenage-girls-recording-reels-themselves-outdoors-social-media (1).jpg"
      alt="reels"
      className="w-full h-100 object-cover rounded-md"
    />
    <p className="mt-4 text-sm text-center bold">
      Reels are short, engaging videos that capture creativity, trends, and moments in just a few seconds.
      They’re perfect for showcasing talent, sharing stories, and connecting with audiences through music,
      effects, and dynamic visuals.
    </p>
  </div>

  {/* Wedding Section */}
  <div className="flex flex-col items-center w-[350px] bg-gray-100 rounded-lg p-4 text-black shadow-md rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-100 transition-transform duration-300">
    <img
      src="public/full-shot-happy-couple-with-flowers.jpg"
      alt="wedding"
      className="w-full h-100 object-cover rounded-md"
    />
    <p className="mt-4 text-sm text-center">
      Wedding photography is more than just pictures — it’s about capturing emotions, love, and the unforgettable
      moments that make your day special. Every smile, tear, and glance is preserved beautifully, turning your wedding
      memories into timeless stories you can cherish forever.
    </p>
  </div>

  {/* DJ Party Section */}
  <div className="flex flex-col items-center w-[350px] bg-gray-100 rounded-lg p-4 text-black shadow-md rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-100 transition-transform duration-300">
    <img
      src="public/happy-female-dj-entertaining-big-crowd.jpg"
      alt="party"
      className="w-full h-100 object-cover rounded-md"
    />
    <p className="mt-4 text-sm text-center">
      DJ party videos capture the energy, rhythm, and excitement of the night. From dazzling lights to electrifying
      beats and crowd vibes, every frame brings the party to life. It’s all about showcasing unforgettable moments
      filled with music, dance, and pure celebration.
    </p>
  </div>
</div>

  )
}

export default Aboutphotography