import {
    IPADDRESS_CHANGE
} from './types';


export const changeIpAddress = (data) => {
    return {
        type: IPADDRESS_CHANGE,
        payload: data
    }
}