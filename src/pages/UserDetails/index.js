import React from "react";
import Header from "../../components/Header";
import CardsWrapper from "../../components/CardsWrapper";
import useFetch from "../../hooks/useFetch";
import Skeleton from "@material-ui/lab/Skeleton";
import Alert from "../../components/Alert";

const Details = props => {
  const basePath = "https://jsonplaceholder.typicode.com";
  const id = props?.match?.params?.id;
  const { data, error } = useFetch(`${basePath}/users/${id}`);

  if (error || !data) {
    return error ? <Alert error={error} /> : <Skeleton />;
  }

  const {
    username,
    email,
    phone,
    website,
    address: { suite, street, city, zipcode },
    company,
  } = data;
  const userData = {
    "Contact Info": { username, email, phone, website },
    Address: { address: `${suite} ${street}, ${city}, ${zipcode}` },
    Company: company,
  };

  return (
    <>
      <Header user={data.name} />
      <CardsWrapper
        userName={data.name}
        userData={userData}
        id={id}
        url={`${basePath}/posts?userId=${id}`}
      />
    </>
  );
};
export default Details;
