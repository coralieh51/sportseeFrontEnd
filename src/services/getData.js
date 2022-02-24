import { USER_MAIN_DATA, USER_ACTIVITY, USER_PERFORMANCE, USER_AVERAGE_SESSIONS } from "../assets/data/mockData";
import { USER_ID, DATA_SRC, URI, PATH_USER } from "../config";
import axios from "axios";

const getUserInfos = () => {
  if (DATA_SRC === "API") {
    return axios
      .get(URI + PATH_USER + USER_ID)
      .then((res) => res.data.data);
  }
  return USER_MAIN_DATA.find((user) => user.id === USER_ID);
}

const getActivity = () => {
  if (DATA_SRC === "API") {
    return axios
      .get(URI + PATH_USER + USER_ID + "/activity")
      .then((res) =>res.data.data);
  }
  return console.log(USER_ACTIVITY.find(user => user.userId === USER_ID))
}

const getPerformance = () => {
    if(DATA_SRC === "API") {
        return axios.get(URI + PATH_USER + USER_ID + "/performance")
        .then((res) => res.data.data);
    }
    return console.log(USER_PERFORMANCE.find(user => user.userId === USER_ID))
}

const getAverageSessions = () => {
    if (DATA_SRC === "API") {
        return(axios.get(URI + PATH_USER + USER_ID + "/average-sessions"))
        .then (res => res.data.data);
    }
    return console.log(USER_AVERAGE_SESSIONS.find(user => user.userId === USER_ID))
}

const getAllData = ()=> {
  return (getUserInfos(),
  getActivity(),
  getPerformance(),
  getAverageSessions())
}

export {getUserInfos, getActivity, getPerformance, getAverageSessions, getAllData};