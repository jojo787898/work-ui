import appconfig from "../appconfig"

const API_ADDRESS = appconfig.workUrl;

const GET_WORK = "/user/";

export const getWork = async () => {
    let url = new URL(API_ADDRESS + GET_WORK);

    let response = await fetch(url)

    if(response.ok) {
        let result = await response.json();
        return result
    }
};