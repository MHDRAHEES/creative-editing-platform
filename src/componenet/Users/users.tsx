import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/userSlice";
import type { RootState, AppDispatch } from "../../Redux/store";
import EditModal from "../Modal/editModal";
import Dialoge from "../ToastMessage/dialogue";
import { User } from "lucide-react";
import SBToast from "../ToastMessage/toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Users() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate=useNavigate();
  const token = localStorage.getItem("token");
  const users = useSelector((state: RootState) => state.auth.users);
  const[showModal,setShowModal]=useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showDialoge,setShowDialoge]=useState(false)
  const [alertAction,setAlertAction]=useState<"edit" | "delete" | null>()

  useEffect(() => {
    if (token) {
      dispatch(fetchUsers(token));
    }
  }, [token, dispatch]);
  useEffect(() => {
  }, [users]);

 const handleConfirmDialog = async () => {
  if (!selectedUser) return;

  const id = selectedUser._id;

  if (alertAction === "edit") {
    setShowModal(true);
  }

  if (alertAction === "delete") {
    try {
      const res = await fetch(`http://localhost:5000/api/user/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.success) {
        SBToast.show("User deleted successfully", "success");
        dispatch(fetchUsers(token!)); // refresh list
      }
    } catch (error) {
      console.error(error);
      SBToast.show("Delete failed", "error");
    }
  }

  setShowDialoge(false);
  setAlertAction(null);
};

return (
  <div className="w-full min-h-screen bg-slate-900 p-6">
    <div className={`w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden transition
          ${showModal ? "blur-sm pointer-events-none" : ""}`}>
      <div className="px-6 py-4 border-b flex items-center gap-3">
        <ArrowLeft
          className="w-5 h-5 cursor-pointer"
          onClick={() => navigate(-1)}/>
        <h2 className="text-xl font-semibold text-gray-800">
          Users List
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users?.length > 0 ? (
              users.map((user: any) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {user.fullName}
                  </td>
                  <td className="px-6 py-4">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    {user.phone || "-"}
                  </td>
                    <td className="px-6 py-4">
                    {user.role || "-"}
                  </td>
                  {user?.role !=='admin' && (       
                    <td className="px-6 py-4 flex justify-end gap-4">
                    <button
                        onClick={() => {
                          setAlertAction("edit");   // mark as edit
                          setSelectedUser(user);
                          setShowDialoge(true);     // show confirmation
                        }}
                      className="text-blue-600 hover:text-blue-800 transition"
                      title="Edit"
                    >
                      <FaEdit size={16} />
                    </button>
                
                    <button
                        onClick={() => {
                          setAlertAction("delete");   // mark as edit
                          setSelectedUser(user);
                          setShowDialoge(true);     // show confirmation
                        }}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Delete"
                    >
                      <MdDelete size={18} />
                    </button>
                  </td>)}
           
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-gray-500"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
    </div>
    {showDialoge && (
      <Dialoge
        onConfirm={handleConfirmDialog}
        onCancel={() => setShowDialoge(false)}
        message={alertAction==='edit'?"Are you sure you want to edit this user":"Are you sure you want to delete this user"}
      />)}
    
    <EditModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      user={selectedUser}
    />
  </div>
);

}

export default Users;
