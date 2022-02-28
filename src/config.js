/**
 * Change the user id into 12 & 18
 * Change the Data src into API ou MOCK string
 * Change the PORT constant if your API isn't running on the 3000 one
 */

const USER_ID = 18; // 12 or 18
const DATA_SRC = "API"; // "API" or "MOCK"
const PORT = 3001;
const URI = "http://localhost:" + PORT ;
const PATH_USER = "/user/";
const IMG_URI = "http://localhost:"+PORT+"/src/assets/img/";

export {USER_ID, DATA_SRC, URI, PATH_USER, IMG_URI};