import React, { useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header";
import UserList from "../../components/UserList";
import Alert from "../../components/Alert";

const Users = () => {
  const [selected, setSelected] = React.useState("name");
  const [searchVal, setSearchVal] = React.useState("");
  const [usersList, setUsersList] = React.useState(null);
  const [filtered, setFiltered] = React.useState(null);
  const { data, error } = useFetch("http://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    if (data) {
      setUsersList([...data].sort((a, b) => a[selected].localeCompare(b[selected])));
    }
  }, [data, selected]);

  useEffect(() => {
    if (usersList) {
      setFiltered(
        [...usersList].filter(({ email, name, username }) => {
          return (
            `${email}${name}${username}`.toLowerCase().indexOf(searchVal.toLowerCase()) >=
            0
          );
        })
      );
    }
  }, [searchVal, usersList]);

  const handleSort = event => {
    setSelected(event.target.value);
  };

  const handleSearch = event => {
    setSearchVal(event.target.value);
  };

  const Wrapper = error ? <Alert error={error} /> : <Skeleton />;
  return (
    <>
      <Header
        selected={selected}
        handleSort={handleSort}
        handleSearch={handleSearch}
        searchVal={searchVal}
      />
      {!filtered ? Wrapper : <UserList data={filtered} />}
    </>
  );
};
export default Users;
