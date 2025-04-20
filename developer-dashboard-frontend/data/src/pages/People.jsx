import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const People = () => {
  const [data, setData] = useState([
    {
      Name: "Karan",
      email: "karan@gmail.com",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm1H7gu-Ei8XKMGM1mHZfKBLlfLVyPXDCLQ&s",
    },
  ]);
  const [id,setId] = useState("1")
  const [res,setRes] = useState(["a","b"])
  useEffect(() => {
    const req = async () => {
      try {
        const reqq = await axios.get("http://localhost:5050/people");
        setData(reqq.data.message);
        setId(reqq.data.id)
      } catch (error) {
        console.log(error);
      }
    };
    req();
  }, []);
  const ress = data.filter(datas => datas._id != id)
   console.log("ress : "+ress)
   console.log(id)
  return (
    <div>
      <div className="py-16 px-6 w-full">
        <div className="flex justify-between gap-6 w-full flex-col">
          <div className="flex justify-center w-full flex-col items-center">
            <h4
              className="text-3xl center"
              style={{ color: "#212636", fontWeight: "500" }}
            >
              People
            </h4>
            <div
              className=" w-10/12 sm:w-6/12 flex justify-center flex-col items-center"
              style={{ height: "480px" }}
            >
              {ress.map((x,key)=>{

              
                return (
                  <div className="flex justify-between gap-1 sm:gap-0 sm:justify-around items-center p-2 border-2 border-purple-500  shadow-lg rounded m-2 w-full sm:w-6/12 h-16">
                    <img
                      src={x.Image}
                      alt={x.Image}
                      key={key}
                      className="border border-purple-600 rounded-3xl w-10 h-10 text-left"
                    />
                    <Link to='/message-page'>
                    <h1
                      key={key}
                      className="text-lg text-blue-600 font-medium hover:text-blue-800 "
                    >
                      {x.Name}
                    </h1></Link>
                    <Link to="/message-page">
                    <button className="rounded-sm p-2 bg-blue-600 text-white text-sm hover:bg-blue-800">
                      Chat
                    </button>
                    </Link>
                  </div>
                );
})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
