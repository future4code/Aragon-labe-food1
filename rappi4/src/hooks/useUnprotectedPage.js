import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../routes/Coordinator";

export const useUnprotectedPage = () =>  {

    const navigate =  useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            goToFeed(navigate)
        }
    }, []);

}