import axios from "axios";

/**
 * Get API endpoints
 * @param {String} url Full URL from API routes
 * @returns {Object} Fullfilled promise with data or error 
 */
const get = (url) => {
    return axios.get(url).then((res) => res.data.data).catch(error =>(console.log(error)));
}
export default get;