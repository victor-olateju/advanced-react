"use client";
import { useMemo, useState } from "react";
import { Blog } from "./blog";

const FetchData = () => {
  const [data, setData] = useState([]);
  useMemo(() => {
    return (async () => {
      const fetchData = await fetch("/data.json");
      const response = await fetchData.json();
      return setData(response);
    })();
  }, []);
  return data;
};

export const Home = () => {
  const fetchedData = FetchData();

  console.log("Data ", fetchedData);

  return (
    <div>
      Home
      {fetchedData?.map((item) => {
        const itemDescription = `${item.description} - $${item.price}`;
        return (
          <div key={item.id} className="">
            <h2>{item.title}</h2>
            <p>{itemDescription}</p>
          </div>
        );
      })}

      <br />
      <Blog />
    </div>
  );
};
