import axios from "axios";

export const APP_TOKENS = {
    ACCESS_TOKEN: "ACCESS_TOKEN",
    REFRESH_TOKEN: "REFRESH_TOKEN",
  };


export const SWAGGER_URL = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  headers: {
      "Content-type": "application/json",
  },
});


export const UserData = [
    {
        email: 'dummy@mail.com',
        name: 'dummy',
        password: 'dummypass',
        role: 'customer',
        avatar: 'https://i.imgur.com/nZnWUc0.jpeg',
        phoneNumber: '+923211234567',
    },
]