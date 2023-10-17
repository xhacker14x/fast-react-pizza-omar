import React from "react";
import { user } from "./userSlice";
import { useSelector } from "react-redux";

const Username = () => {
  const { username } = useSelector(user);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};

export default Username;
