import { GetUserByToken } from "../../common/requests";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function ProtectedRoute({ children }) {
    const [cookie, setCookie, removeCookie] = useCookies();
    const [child, setChild] = useState();
    const navigate = useNavigate();
    const token = cookie.token;
    useEffect(() => {
        GetUserByToken({token})
        .then((res) => {
            if (res.status !== 200) {
                navigate("/login");
                console.log(res);
            }
            setChild(children);
            
        }).catch(() => {
            navigate("/login");
        });
    }, [token]);

    return child;
};