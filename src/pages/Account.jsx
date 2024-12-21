import React, { useState } from 'react';

function Account() {
  const [profile, setProfile] = useState({
    firstName: 'Sofia',
    lastName: 'Rivers',
    email: 'sofia@devias.io',
    state: '',
    city: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(profile);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Account</h2>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <img src={profile.picture || 'https://via.placeholder.com/150'} alt="Profile Picture" className="rounded-full w-24 h-24 mb-4" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">{profile.firstName} {profile.lastName}</h3>
              <p className="text-sm text-gray-500">{profile.location}</p>
              <p className="text-sm text-gray-500">{profile.timezone}</p>
              <button className="mt-2 text-sm text-blue-500 hover:underline">Upload picture</button>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Profile</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name *</label>
                  <input type="text" id="firstName" name="firstName" value={profile.firstName} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name *</label>
                  <input type="text" id="lastName" name="lastName" value={profile.lastName} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address *</label>
                <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div className="mt-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                <input type="tel" id="phone" name="phone" value={profile.phone} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div className="mt-4">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <select id="state" name="state" value={profile.state} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select state</option>
                  {/* Add state options here */}
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" id="city" name="city" value={profile.city} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div className="mt-6">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save details</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;