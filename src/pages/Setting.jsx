import React from "react";

const SettingsPage = () => {
  return (
    <div className="py-16 px-6 w-full h-full">
      <div className="flex flex-col gap-6">
        <h4 style={{ fontSize: "32px", color: "#212636", fontWeight: "500" }}>
          Settings
        </h4>

        {/* Notifications Section */}
        <div
          className="flex flex-col w-full rounded-xl shadow-sm"
          style={{ border: "1px solid #f0f0f0" }}
        >
          <div
            className="w-full pt-8 pb-4 px-6"
            style={{ borderBottom: "1px solid #e6e8ed" }}
          >
            <h2 className="text-lg font-semibold" style={{ color: "#212636" }}>
              Notifications
            </h2>
            <span
              className="text-sm"
              style={{ color: "#667085", fontWeight: "400" }}
            >
              Manage the notifications
            </span>
          </div>
          <div className="w-full gap-5 sm:gap-0 grid grid-cols-4 md:grid-cols-3 py-9 px-6">
            <div className="col-span-4 sm:col-span-2 md:col-span-1">
              <div className="flex gap-3 flex-col">
                <h6
                  style={{
                    fontSize: "18px",
                    color: "#212636",
                    fontWeight: "500",
                  }}
                >
                  Email
                </h6>
                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-custompurple"
                      defaultChecked
                    />
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#212636",
                        fontWeight: "400",
                      }}
                    >
                      Product updates
                    </span>
                  </label>
                  <label className="flex items-center  gap-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-custompurple"
                    />
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#212636",
                        fontWeight: "400",
                      }}
                    >
                      Security updates
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-2 md:col-span-1">
              <div className="flex gap-3 flex-col">
                <h6
                  style={{
                    fontSize: "18px",
                    color: "#212636",
                    fontWeight: "500",
                  }}
                >
                  Phone
                </h6>
                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-custompurple"
                      defaultChecked
                    />
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#212636",
                        fontWeight: "400",
                      }}
                    >
                      Product updates
                    </span>
                  </label>
                  <label className="flex items-center  gap-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-custompurple"
                    />
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#212636",
                        fontWeight: "400",
                      }}
                    >
                      Security updates
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end p-2 w-full" style={{borderTop:"1px solid #e6e8ed"}}>
            <button style={{fontSize:"14px",fontWeight:"400",color:"white"}} className="py-2 px-5 bg-custompurple rounded"> Save Changes</button>
          </div>
        </div>

        {/* Password Section */}
        <div
          className="flex flex-col w-full rounded-xl shadow-sm"
          style={{ border: "1px solid #f0f0f0" }}
        >
          <div
            className="w-full pt-8 pb-4 px-6"
            style={{ borderBottom: "1px solid #e6e8ed" }}
          >
            <h2 className="text-lg font-semibold" style={{ color: "#212636" }}>
              Password
            </h2>
            <span
              className="text-sm"
              style={{ color: "#667085", fontWeight: "400" }}
            >
              Update Password
            </span>
          </div>
          <div className="w-full flex py-9 px-6">
            <div className="w-full flex flex-col gap-6">
              <input type="text" placeholder="Password" className="w-full sm:w-4/5 lg:w-3/5 outline-none rounded" style={{padding:"16.5px 14px",color:"rgba(33,38,54,1)",border:"1px solid #e0e0e0"}} />
              <input type="text" placeholder="Confirm Password" className="w-full sm:w-4/5 lg:w-3/5 outline-none rounded" style={{padding:"16.5px 14px",color:"rgba(33,38,54,1)",border:"1px solid #e0e0e0"}} />
            </div>
          </div>
          <div className="flex justify-end p-2 w-full" style={{borderTop:"1px solid #e6e8ed"}}>
            <button style={{fontSize:"14px",fontWeight:"400",color:"white"}} className="py-2 px-5 bg-custompurple rounded">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
