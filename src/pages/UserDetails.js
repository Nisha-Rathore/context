import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TableBody from "./TableBody";

const UserDetails = () => {
  const { user_id } = useParams();
  const [data, setData] = useState({});

  const getDetail = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );
    const resData = await res.json();
    console.log(resData);

    setData(resData);
  };
  useEffect(() => {
    getDetail();
  }, [user_id]);

  return (

    <div className="bg-gradient-to-r from-violet-400 via-rose-300 to-cyan-300 p-20">
        <div>
            {/* <Link to={<TableBody></TableBody>}>Back</Link> */}
        </div>
    <div className=" text-center text-white font-medium text-2xl place-content-center">
      <p className="text-purple-500 text-6xl pb-5 leading-loose">Details of users</p>  
      <p>Name:{data.name}</p>
      <p>UserName:{data.username}</p>
      <p>Email:{data.email}</p>
      <p>Address:{data.address?.street} {data.address?.suite} {data.address?.city}</p>
      <p>Phone:{data.phone}</p>
      <p>Website:{data.website}</p>
    </div>
    </div>
  );
};

export default UserDetails;
