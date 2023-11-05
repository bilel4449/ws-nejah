import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getAllUsers } from "../redux/action";
import Edit from "./Edit";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{user.fullName}</h1>
      <button
        onClick={() => {
          dispatch(deleteUser(user._id));
          dispatch(getAllUsers());
        }}
      >
        Delete
      </button>
      <Edit user={user} />
      <hr />
    </div>
  );
};

export default UserCard;
