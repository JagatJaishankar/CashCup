"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminUsersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    { id: 1, name: "Ahmed Al-Qahtani", email: "ahmed@example.com", role: "player", status: "active", joined: "Jan 15, 2024" },
    { id: 2, name: "Mohammed Al-Rashid", email: "mohammed@example.com", role: "manager", status: "active", joined: "Feb 1, 2024" },
    { id: 3, name: "Khalid Al-Zahrani", email: "khalid@example.com", role: "player", status: "active", joined: "Jan 20, 2024" },
    { id: 4, name: "Omar Al-Ghamdi", email: "omar@example.com", role: "player", status: "suspended", joined: "Mar 5, 2024" },
    { id: 5, name: "Fahad Al-Mutairi", email: "fahad@example.com", role: "manager", status: "active", joined: "Feb 15, 2024" }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || user.role === activeTab;
    return matchesSearch && matchesTab;
  });

  const getStatusBadge = (status) => {
    const badges = {
      active: "badge-success",
      suspended: "badge-error",
      inactive: "badge-neutral"
    };
    return badges[status] || "badge-neutral";
  };

  const getRoleBadge = (role) => {
    const badges = {
      player: "badge-info",
      manager: "badge-warning",
      admin: "badge-error"
    };
    return badges[role] || "badge-neutral";
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            USER MANAGEMENT
          </h1>
          <p className="font-helvetica text-white">
            Manage users, roles, and permissions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Total Users</h3>
              <p className="text-primary text-3xl font-righteous">{users.length}</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Players</h3>
              <p className="text-info text-3xl font-righteous">
                {users.filter(u => u.role === 'player').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Managers</h3>
              <p className="text-warning text-3xl font-righteous">
                {users.filter(u => u.role === 'manager').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Suspended</h3>
              <p className="text-error text-3xl font-righteous">
                {users.filter(u => u.status === 'suspended').length}
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search users by name or email..."
              className="input input-bordered bg-base-200 text-white w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="tabs tabs-boxed bg-base-200">
            <button
              className={`tab font-righteous ${activeTab === 'all' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button
              className={`tab font-righteous ${activeTab === 'player' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('player')}
            >
              Players
            </button>
            <button
              className={`tab font-righteous ${activeTab === 'manager' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('manager')}
            >
              Managers
            </button>
          </div>
          <button className="btn btn-primary font-righteous">
            + Add User
          </button>
        </div>

        {/* Users Table */}
        <div className="card bg-base-200 shadow-xl border-2 border-base-300">
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="text-white border-base-300">
                    <th className="font-righteous">ID</th>
                    <th className="font-righteous">Name</th>
                    <th className="font-righteous">Email</th>
                    <th className="font-righteous">Role</th>
                    <th className="font-righteous">Status</th>
                    <th className="font-righteous">Joined</th>
                    <th className="font-righteous">Actions</th>
                  </tr>
                </thead>
                <tbody className="font-helvetica">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-base-100 border-base-300">
                      <td className="text-gray-400">#{user.id}</td>
                      <td className="text-white font-semibold">{user.name}</td>
                      <td className="text-gray-400">{user.email}</td>
                      <td>
                        <span className={`badge ${getRoleBadge(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${getStatusBadge(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="text-gray-400">{user.joined}</td>
                      <td>
                        <div className="dropdown dropdown-end">
                          <label tabIndex={0} className="btn btn-xs btn-ghost">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                            </svg>
                          </label>
                          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className="font-helvetica">View Profile</a></li>
                            <li><a className="font-helvetica">Edit User</a></li>
                            <li><a className="font-helvetica">Change Role</a></li>
                            <li><a className="font-helvetica text-warning">Suspend</a></li>
                            <li><a className="font-helvetica text-error">Delete</a></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 font-helvetica">No users found matching your search</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
