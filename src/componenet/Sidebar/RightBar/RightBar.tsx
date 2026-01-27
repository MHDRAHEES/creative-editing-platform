import { Video, Music, Facebook } from "lucide-react";

function RightBar() {
  return (
    <div className="flex flex-col mt-20 items-center gap-4">

      {/* Card 1 */}
      <div className="max-w-xs bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Video className="text-red-600" size={20} />
          <h3 className="text-sm font-semibold text-gray-800 uppercase">
            Instagram Reels
          </h3>
        </div>
        <p className="text-gray-600 text-sm text-center leading-relaxed">
          Create short, engaging Reels with smart cuts, captions,
          and trending formats.
        </p>
      </div>

      {/* Card 2 */}
      <div className="max-w-xs bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Music className="text-green-600" size={20} />
          <h3 className="text-sm font-semibold text-gray-800 uppercase">
            Spotify Clips
          </h3>
        </div>
        <p className="text-gray-600 text-sm text-center leading-relaxed">
          Design eye-catching Spotify visuals and audio snippets
          that boost listens.
        </p>
      </div>

      {/* Card 3 */}
      <div className="max-w-xs bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Facebook className="text-blue-600" size={20} />
          <h3 className="text-sm font-semibold text-gray-800 uppercase">
            Facebook Videos
          </h3>
        </div>
        <p className="text-gray-600 text-sm text-center leading-relaxed">
          Optimize videos for Facebook with the right size,
          hooks, and thumbnails.
        </p>
      </div>

    </div>
  );
}

export default RightBar;

