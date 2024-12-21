import React from "react";

const SettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Notifications Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-1">Notifications</h2>
        <p className="text-sm text-gray-500 mb-4">Manage the notifications</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Notifications */}
          <div>
            <h3 className="text-sm font-medium mb-2">Email</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  defaultChecked
                />
                <span className="text-sm">Product updates</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-sm">Security updates</span>
              </label>
            </div>
          </div>

          {/* Phone Notifications */}
          <div>
            <h3 className="text-sm font-medium mb-2">Phone</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-sm">Email</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-sm">Security updates</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Save changes
          </button>
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-1">Password</h2>
        <p className="text-sm text-gray-500 mb-4">Update password</p>

        <div className="space-y-4">
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
