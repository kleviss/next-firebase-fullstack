import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        // Lookup the user associated with the specified uid.
        getAuth()
          .getUser(user.uid)
          .then((userRecord) => {
            // The claims can be accessed on the user record.
            console.log("kaka", userRecord.customClaims["hasPremium"]);
          });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <div
          style={{
            // position this emelent in the center of the screen
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // style the text
            fontSize: "1.2rem",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            color: "var(--color-primary)",
          }}
        >
          Checking Authentication 🫣
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
