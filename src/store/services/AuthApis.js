import { SWAGGER_URL } from "../constants/constants";

const login = credentials => {
    console.log(credentials);
    return SWAGGER_URL.post("auth/login", credentials); 
};

const authEndPoints = {
    login,
}


export default authEndPoints;