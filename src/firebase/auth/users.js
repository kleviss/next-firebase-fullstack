import { getAuth } from "firebase/auth";

const listAllUsers = async (nextPageToken) => {
  try {
    const auth = getAuth(); // Invoke the function to get the Auth object
    const listUsersResult = await auth.listUsers(1000, nextPageToken); // Access listUsers method from Auth object
    listUsersResult.users.forEach((userRecord) => {
      console.log("user", userRecord.toJSON());
    });
    if (listUsersResult.pageToken) {
      await listAllUsers(listUsersResult.pageToken);
    }
  } catch (error) {
    console.log("Error listing users:", error);
  }
};

export default listAllUsers;
