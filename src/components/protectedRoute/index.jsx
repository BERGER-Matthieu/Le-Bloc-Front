import { GetUserByToken } from "../../common/requests";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function ProtectedRoute({ children }) {
    const [cookie, setCookie, removeCookie] = useCookies();
    const [child, setChild] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        GetUserByToken(cookie.token)
        .then((res) => {
            if (res.status !== 200) {
                navigate("/login");
            }
            setChild(children);
            
        }).catch(() => {
            navigate("/login");
        });
    }, []);

    return child;
};