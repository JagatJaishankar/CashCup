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
    <div className="min-h-screen bg-base-100">
      <section className="bg-base-200 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/admin" className="btn btn-ghost btn-sm text-primary mb-4 font-body">
            ← Back to Dashboard
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl text-primary uppercase font-bold mb-4">
            USER MANAGEMENT
          </h1>
          <p className="font-body text-neutral/60">
            Manage users, roles, and permissions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="text-neutral/60 text-sm font-body">Total Users</h3>
              <p className="text-primary text-3xl font-heading font-bold">{users.length}</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="text-neutral/60 text-sm font-body">Players</h3>
              <p className="text-info text-3xl font-heading font-bold">
                {users.filter(u => u.role === 'player').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="text-neutral/60 text-sm font-body">Managers</h3>
              <p className="text-warning text-3xl font-heading font-bold">
                {users.filter(u => u.role === 'manager').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="text-neutral/60 text-sm font-body">Suspended</h3>
              <p className="text-error text-3xl font-heading font-bold">
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
              className="input input-bordered bg-base-100 text-secondary border-base-300 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="tabs tabs-boxed bg-base-200">
            <button
              className={`tab font-heading uppercase ${activeTab === 'all' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button
              className={`tab font-heading uppercase ${activeTab === 'player' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('player')}
            >
              Players
            </button>
            <button
              className={`tab font-heading uppercase ${activeTab === 'manager' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('manager')}
            >
              Managers
            </button>
          </div>
          <button className="btn btn-primary font-heading uppercase">
            + Add User
          </button>
        </div>

        {/* Users Table */}
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="text-secondary border-base-300">
                    <th className="font-heading uppercase">ID</th>
                    <th className="font-heading uppercase">Name</th>
                    <th className="font-heading uppercase">Email</th>
                    <th className="font-heading uppercase">Role</th>
                    <th className="font-heading uppercase">Status</th>
                    <th className="font-heading uppercase">Joined</th>
                    <th className="font-heading uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="font-body">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-base-200 border-base-300">
                      <td className="text-neutral/60">#{user.id}</td>
                      <td className="text-secondary font-semibold">{user.name}</td>
                      <td className="text-neutral/60">{user.email}</td>
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
                      <td className="text-neutral/60">{user.joined}</td>
                      <td>
                        <div className="dropdown dropdown-end">
                          <label tabIndex={0} className="btn btn-xs btn-ghost">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                            </svg>
                          </label>
                          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 border border-base-300 rounded-box w-52">
                            <li><a className="font-body">View Profile</a></li>
                            <li><a className="font-body">Edit User</a></li>
                            <li><a className="font-body">Change Role</a></li>
                            <li><a className="font-body text-warning">Suspend</a></li>
                            <li><a className="font-body text-error">Delete</a></li>
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
                <p className="text-neutral/60 font-body">No users found matching your search</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
