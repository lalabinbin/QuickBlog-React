import ListUserManagement from "@/components/ListUserManagement";
import { getDataUser } from "@/services/api/user";
import React, { useEffect, useState } from "react";
import { List } from "react-content-loader";
import toast from "react-hot-toast";

const UserManagement = () => {
  const [listUsers, setListUsers] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [loading, setLoading] = useState(false);
  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await getDataUser();
      console.log("data:", data);
      setListUsers(data.data.items);
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userInfo) loadUsers();
  }, []);

  return (
    <div>
      <ListUserManagement
        listUsers={listUsers}
        loading={loading}
        userInfo={userInfo.id}
        setListUsers={setListUsers}
      />
    </div>
  );
};

export default UserManagement;
