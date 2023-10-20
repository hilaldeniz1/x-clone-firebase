import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = () => {
  // kullanıcının yetkisi var mı state i
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    // aktif oturumdaki degisşikligi izler
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  //   kullanıcının yetkisi yoksa logine yönlendir
  if (isAuth === false) return <Navigate to={"/"} replace />;

  //   kullanıcının yetkisi varsa alt route u göster
  return <Outlet />;
};

export default ProtectedRoute;
