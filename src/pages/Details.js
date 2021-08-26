import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserInfo } from "../store/userInfo";
import { fetchUsersPosts } from "../store/userPosts";
import { usersActions } from "../store/users";

import Info from "../components/Info";
import Posts from "../components/Posts";

const Details = (props) => {
  const { loadingInfo, infoError, usersInfo } = useSelector(
    (state) => state.info
  );

  const { loadingPosts, postsError, usersPosts } = useSelector(
    (state) => state.posts
  );

  const [currentInfo, setCurrentInfo] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);

  const id = props?.match?.params?.id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!usersInfo[id]) {
      dispatch(fetchUserInfo(id));
    }
  }, [dispatch, id, usersInfo]);

  useEffect(() => {
    if (!usersPosts[id]) {
      dispatch(fetchUsersPosts(id));
    }
  }, [dispatch, id, usersPosts]);

  useEffect(() => {
    if (id && usersInfo?.[id]) {
      const {
        name,
        username,
        email,
        phone,
        website,
        address: { suite, street, city, zipcode },
        company,
      } = usersInfo[id];
      const userData = {
        "Contact Info": { username, email, phone, website },
        Address: { address: `${suite} ${street}, ${city}, ${zipcode}` },
        Company: company,
      };
      dispatch(usersActions.setCurrentUserName({ name }));
      setCurrentInfo(userData);
    }
  }, [dispatch, usersInfo, id]);

  useEffect(() => {
    if (id && usersPosts?.[id]?.length) {
      setCurrentPosts(usersPosts[id]);
    }
  }, [dispatch, usersPosts, id]);

  return (
    <>
      <Info
        info={currentInfo}
        loadingInfo={loadingInfo}
        infoError={infoError}
      />
      <Posts
        posts={currentPosts}
        loadingPosts={loadingPosts}
        postsError={postsError}
      />
    </>
  );
};
export default Details;
