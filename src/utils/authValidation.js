/** @format */

import axios from "axios";

export const validateLogin = async (userName, password) => {
  const result = await axios.get(
    `http://localhost:3001/users?userName=${userName}`
  );
  console.log(result.data);
  if (result.data.length == 0) {
    throw new Error("No user exists");
  }
  if (password != result.data[0].password) {
    throw new Error("passwords do not match");
  }
  return {
    userName: result.data[0].userName,
    firstName: result.data[0].firstName,
    lastName: result.data[0].lastName,
    propertyAccess: result.data[0].propertyAccess,
    consultingAccess: result.data[0].consultingAccess,
  };
};
