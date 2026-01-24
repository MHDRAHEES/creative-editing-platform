import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import SBToast from "../ToastMessage/toast";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    _id: string;
    fullName: string;
    email: string;
    phone?: string;
  };
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  // ✅ populate fields when modal opens
  useEffect(() => {
    if (user) {
      setFullName(user.fullName || "");
      setPhone(user.phone || "");
    }
  }, [user]);

  if (!isOpen || !user) return null;

  const handleEditUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://localhost:5000/api/user/${user._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            fullName,
            phone,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        SBToast.show("User updated successfully", "success");
        onClose();
      } else {
        SBToast.show(data.message || "Update failed", "error");
      }
    } catch (error) {
      console.error(error);
      SBToast.show("Something went wrong", "error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-semibold">Edit User</h3>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div>
            <label className="text-sm">Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              value={user.email}
              disabled
              className="w-full mt-1 px-3 py-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="text-sm">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
              maxLength={10}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-5 py-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleEditUser}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
