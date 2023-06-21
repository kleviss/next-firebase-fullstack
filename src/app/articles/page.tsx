"use client";
import React from "react";
import { useRouter } from "next/navigation";
import NavTop from "@/components/NavTop";
import Link from "next/link";
import { useFetch } from "@/hooks/useSWR";
import { User } from "@/types/metadata";

const ArticlesPage = () => {
  const router = useRouter();
  const { GetRealtimeDatabaseMetadata } = useFetch();
  const { data: metadata, error: metadataError } =
    GetRealtimeDatabaseMetadata();

  if (metadataError) {
    return (
      <div className="text-4xl text-center font-medium text-gray-500 hover:text-gray-900">
        {metadataError.toString()}
      </div>
    );
  }

  if (!metadata) {
    return (
      <div className="text-4xl text-center font-medium text-gray-500 hover:text-gray-900">
        Loading...
      </div>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen">
      <NavTop user={null} href={"/articles"} />
      <div className="px-6 py-24">
        <h1 className="text-4xl font-medium text-gray-500 hover:text-gray-900 mb-6">
          Users
        </h1>
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
  );
};

export default ArticlesPage;
