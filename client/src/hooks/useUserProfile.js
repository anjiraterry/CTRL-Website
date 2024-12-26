import { useState, useEffect } from "react";
import axios from "axios";

const useUserProfile = () => {
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [errormsg, setErrormsg] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setErrormsg("No token found, please log in");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setUser(response.data); 
         

        }
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setErrormsg("Authentication failed: Invalid or expired token");
        } else {
          setErrormsg("Failed to fetch user data: " + err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []); // Only run on mount

  return { user, isloading, errormsg };
};

export default useUserProfile;
