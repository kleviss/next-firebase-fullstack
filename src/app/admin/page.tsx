"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useFetch } from "@/hooks/useSWR";
import NavTop from "@/components/NavTop";
import GenericInfoText from "@/components/GenericInfoText";
import { User } from "@/types/metadata";
import FirebaseUser from "@/types/firebase_user";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";

const AdminPage = () => {
  const router = useRouter();
  const { user } = useAuthContext() as { user: FirebaseUser };
  const { GetRealtimeDatabaseMetadata } = useFetch();
  const { data: metadata, error: metadataError } =
    GetRealtimeDatabaseMetadata();

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

  return (
    <>
      {user && user.email === "ramiz.aliaa@gmail.com" ? (
        <main className="bg-gray-100 min-h-full">
          <NavTop user={user} href={"/"} />

          <div className="px-6 py-24">
            {/* Space between title and button */}
            <div className="flex justify-between">
              <h2 className="text-4xl font-medium text-gray-500 hover:text-gray-900 mb-6">
                Users
              </h2>
              {/* check is user is admin */}
              {user && user.email === "ramiz.aliaa@gmail.com" ? (
                <Link
                  href={`/dashboard`}
                  className="text-indigo-600 inline-flex px-4 m-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md items-center"
                >
                  Dashboard
                </Link>
              ) : null}
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Access Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Has Premium
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.values(metadata).map((user: User) => (
                    <tr key={user.user}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {user.user}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {user.customClaims.accessLevel}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {user.customClaims.hasPremium.toString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-900 ml-4">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
          {/* Content for non-admin users */}
          <div className="text-4xl text-center font-medium text-gray-500 hover:text-gray-900">
            You do not have permission to access this page.
          </div>
          <div className="mt-4">
            <button
              className="text-indigo-600 hover:text-indigo-900"
              onClick={() => router.push("/dashboard")}
            >
              Go back home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPage;
