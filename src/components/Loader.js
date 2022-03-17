import ReactLoading from "react-loading";
import React, { useEffect, useState } from "react";

function Loader() {
    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);
    useEffect(() => {
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              setData(json);
              setDone(true);
            });
        }, 2000);
      }, []);
  return (
    <>
      {!done ? (
        <ReactLoading
          type={"bars"}
          color={"#04fc4e"}
          height={100}
          width={100}
        />
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Loader