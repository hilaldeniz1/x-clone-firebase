import Nav from "./../components/Nav";
import Main from "./../components/Main";
import Aside from "./../components/Aside";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

const Feed = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    // firebase den aktif kullanıcının verisini aldık
    // state e aktardık
    onAuthStateChanged(auth, (res) => {
      setUser(res);
    });
  }, []);
  return (
    <div className="feed h-screen bg-black overflow-hidden">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};

export default Feed;
