import React, { useEffect } from "react";

const Api = () => {
  useEffect = () => {
    const fetchData = async () => {
      const response = await fetch(
        "https://v3.shopview.net/sapi/v3/order-detail/store/1577",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "RgUkXp2s5v8y5B8E7H1MbQeThVmYq3t6",
            calling_app: "shopos",
            calling_source: "R-web",
          },
        },
        []
      );
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  };

  return (
    <>
      <h1>Api</h1>
      {/* {data.map((user) => console.log(user))} */}
    </>
  );
};

export default Api;
