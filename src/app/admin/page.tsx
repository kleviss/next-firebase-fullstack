"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useFetch } from "@/hooks/useSWR";
import NavTop from "@/components/NavTop";
import GenericInfoText from "@/components/GenericInfoText";
import { User } from "@/types/metadata";
import { useAuthContext } from "@/context/AuthContext";
import UserManagementModal from "@/components/UserManagementModal";
import DeleteUserModal from "@/components/DeleteUserModal";
import Link from "next/link";
import FirebaseUser from "@/types/firebase_user";
import { getAuth, deleteUser } from "firebase/auth";


type Metadata = Record<string, User>;

const AdminPage = () => {
  const router = useRouter();
  const { user } = useAuthContext() as { user: FirebaseUser | null };
  const { GetRealtimeDatabaseMetadata } = useFetch();
  const { data: metadata, error: metadataError } = GetRealtimeDatabaseMetadata();

  const [modalVisible, setModalVisible] = React.useState<string | undefined>(undefined);
  const [openModal, setOpenModal] = React.useState<string | undefined>();
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);

  const handleRowClick = (user: User) => {
    console.log("userusi: ", user)
    setSelectedUser(user);
    setModalVisible("dismissible");
  };

  const handleDeleteUser = async () => {
    if (user && user.email) {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          //await deleteUser(user);
          console.log("user deleted", user.email);
          router.push("/admin");
        }

        // User deletion successful, perform any additional actions
        // such as updating the UI or displaying a success message.
      } catch (error) {
        // An error occurred while deleting the user.
        // Handle the error, display an error message, or perform any necessary actions.
        console.log("Error deleting user:", error);
      }
    }
  };


  if (metadataError) {
    return (
      <GenericInfoText
        textSize="text-2xl"
        textAlignment="text-center"
        textColor="text-gray-500"
        customStyles="font-medium hover:text-gray-900"
      >
        {metadataError.toString()}
      </GenericInfoText>
    );
  }

  if (!metadata) {
    return (
      <GenericInfoText
        textSize="text-2xl"
        textAlignment="text-center"
        textColor="text-gray-500"
        customStyles="font-medium hover:text-gray-900"
      >
        Loading...
      </GenericInfoText>
    );
  }

  const users: User[] = Object.values(metadata);

  return (
    <>
      {user && user.email === "ramiz.aliaa@gmail.com" ? (
        <main className="bg-gray-100 min-h-full">
          <NavTop user={user} href={"/"} />

          <div className="px-6 py-24">
            <div className="flex justify-between">
              <h2 className="text-4xl font-medium text-gray-500 hover:text-gray-900 mb-6">
                Users
              </h2>
            </div>

            <div className="bg-white shadow overflow-hidden mobile:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Has Premium
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Access Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.user + user.refreshTime} className="cursor-pointer">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900" onClick={() => handleRowClick(user)}>
                          {user.user}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {user.customClaims.hasPremium.toString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {user.customClaims.accessLevel}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-indigo-600 hover:text-indigo-900" onClick={() => handleRowClick(user)}>
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-900 ml-4" onClick={() => handleDeleteUser()}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <UserManagementModal
              openModal={modalVisible}
              setOpenModal={setModalVisible}
              email={selectedUser?.user || ""}
              accessLevel={selectedUser?.customClaims.accessLevel || 0}
              hasPremium={selectedUser?.customClaims.hasPremium || false}
            />

            <DeleteUserModal
              openModal={openModal}
              setOpenModal={setOpenModal}

            />
          </div>
        </main>
      ) : (
        <GenericInfoText
          textSize="text-2xl"
          textAlignment="text-center"
          textColor="text-gray-500"
          customStyles="font-medium hover:text-gray-900"
        >
          You are not authorized to access this page.
        </GenericInfoText>
      )}
    </>
  );
};

export default AdminPage;