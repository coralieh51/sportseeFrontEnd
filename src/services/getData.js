import { USER_MAIN_DATA, USER_ACTIVITY, USER_PERFORMANCE, USER_AVERAGE_SESSIONS } from "../assets/data/mockData";
import { USER_ID, DATA_SRC, URI, PATH_USER } from "../config";
import get from "../helper/fetchWrapper";

/**
 * Get user main data from API or MOCK data
 * @returns {Object} : user infos
 */
const getUserInfos = () => {
  if (DATA_SRC === "API") {
    return get(URI + PATH_USER + USER_ID)
  }
  return findById(USER_MAIN_DATA, "id")
}

/**
 * Get user weight and burned calories infos by day from API or MOCK data
 * @returns {Object} : user activity
 */
const getActivity = () => {
  if (DATA_SRC === "API") {
    return get(URI + PATH_USER + USER_ID + "/activity")
  }
  return findById(USER_ACTIVITY, "userId")
}

/**
 * Get user performance values in each kind of skills from API or MOCK data
 * @returns {Object} : user performance
 */
const getPerformance = () => {
    if(DATA_SRC === "API") {
        return get(URI + PATH_USER + USER_ID + "/performance")
    }
    return findById(USER_PERFORMANCE, "userId")
}

/**
 * Get user average sessions duration by day from API or MOCK data
 * @returns {Object} : user average sessions
 */
const getAverageSessions = () => {
    if (DATA_SRC === "API") {
        return get(URI + PATH_USER + USER_ID + "/average-sessions")
    }
    return findById(USER_AVERAGE_SESSIONS, "userId")
}

/**
 * Finds Mock data by user id
 * @param {Array.<Object>} data fulldata
 * @param {string} userId
 * @returns {Object} data by user id
 */
const findById = (data,userId) => {
  return data.find(user => user[userId] === USER_ID)
}

export {getUserInfos, getActivity, getPerformance, getAverageSessions};