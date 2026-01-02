import React, { useState } from "react";
import SBToast from "../ToastMessage/toast";

interface Props {
  onClose: () => void;
  onUpload: (url: string) => void;
}

function UploadModal({ onClose, onUpload }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [caption, setCaption] = useState("");

  const handleSubmit = async () => { 
    if (!file) {
      SBToast.show("Please select a file", "warning");
      return;
    }
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("caption", caption);

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
          headers: {
         Authorization: `Bearer ${token}`, // add token here
  },
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        SBToast.show("Uploaded successfully", "success");
        onUpload(data.fileUrl); // pass uploaded file URL to parent
      } else {
        SBToast.show(data.message || "Upload failed", "error");
      }
    } catch (error) {
      SBToast.show("Upload failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='fixed inset-0 bg-opacity-40 flex items-center justify-center bg-[url("background_blue.jpg")] bg-repeat-round '>
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-lg font-bold mb-4">Upload Media</h2>

        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="p-5 flex "
        />
        <input
        type="string"
        placeholder="Write Caption......."
        onChange={((e)=>setCaption(e.target.value))}
        className="p-5 flex  border"/>

        <div className="flex justify-end gap-3 mt-6">
          <button className="px-3 py-1 border rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadModal;
