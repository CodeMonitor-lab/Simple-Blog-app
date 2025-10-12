import React, { useEffect, useState } from "react";
import { User } from "lucide-react";

const UserProfile = () => {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    console.log(storedName)
    if (storedName) {
      setUserName(storedName);
      setIsLoggedIn(true);
      console.log("User Name:", storedName);
    } else {
      setIsLoggedIn(false);
      console.log("No user name found in localStorage");
    }
  }, []);

  return (
    <div className="flex items-center gap-2">
      {/* <User className="text-gray-600 w-5 h-5" /> */}
      {isLoggedIn ? (
        <span className="font-semibold  px-2 rounded-full text-green-800">{userName.charAt(0).toUpperCase()}</span>
      ) : (
        <span className="text-gray-400 text-sm italic">Guest</span>
      )}
    </div>
  );
};

export default UserProfile;
