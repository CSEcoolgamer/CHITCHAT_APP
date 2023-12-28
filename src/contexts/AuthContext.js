// To getting back the data while login from GOOGLE & GITHUB - we need to use useContexts (manage all users information)

import React, {useContext, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { auth } from "firebase";

const AuthContext = React.useContext();

export const useAuth = () => useContext(AuthContext);

// all react components get something within the props : in this case we're going to destructure it to (children)
// Note : whenever we are using (AuthProvider) - we are going to use (children: render all jsx that we pass to AuthProvider) 
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState("true");
    const [user , setUser] = useState({});
    const history = useHistory();

}