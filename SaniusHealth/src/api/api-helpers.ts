import axios, {AxiosRequestConfig} from 'axios';
import { IJson } from '../models/shared/common';
import { EApiMethods, IFcError, IParams, IResData } from '../models/shared/apiRequests';

interface IReqParameters {
    path: string;
    params: IParams;
    glacierAuthToken?: string;
    controlCenterAuthToken?: string;
    highlightsToken: boolean;
}

const getHeaders = ()=>{
    return {
        'Authorization':`Bearer ${API_KEY}`,
        "accept":"application/json"
    }
}

export const makeRequest = async ({
    path,
    params,
}: IReqParameters) => {
    try {
        let headers = getHeaders() ;
        
        let config: AxiosRequestConfig<any> = {
            method: params.method,
            headers: headers,
            url: path,
            params: {},
            data: {},
        };

        if (params.method === EApiMethods.GET) config.params = params.data;
        else config.data = params.data;

        const response = await axios(config);
        return response.data;
    } catch (error: any) {
        console.log(error.response);
        if (error?.response?.data?.error! === 'Invalid token' || error?.response?.data?.error! === 'User not found') {
            
            return;
        } else if (error.response.data && Object.keys(error.response.data).length) {
            throw new Error(getErrorMessagesFromApi(error.response.data));
        } else {
            throw new Error(error.message || 'Something went wrong');
        }
    }
};

const getErrorMessagesFromApi = (data: IFcError) => {
    let msg = 'Something Went Wrong';
    if (typeof data === 'string') msg = data;
    else if (data.error) msg = data.error;
    else if (data.fieldErrors && data.fieldErrors.length) {
        const temp = data.fieldErrors.map(
            (err: any) => `${err.error}${err.field ? `, ${err.field}` : ''}${err.value ? `, ${err.value}` : ''}`,
        );
        msg = temp.join('; ');
    } else if (data.name === 'TokenExpiredError') {
        msg = 'Token expired!';
    }
    return msg;
};

export const jsonToForm = (data: IJson) => {
    const form = new FormData();
    const keys = Object.keys(data);
    const values = Object.values(data);
    keys.map((key, i) => form.append(key, values[i]));
    console.log(form, data);
    return form;
};

export const urlToArrayBuffer = async (url: string): Promise<IResData<ArrayBuffer>> => {
    try {
        const config: AxiosRequestConfig<any> = {
            url,
            method: 'GET',
            responseType: 'arraybuffer',
        };
        const res = await axios(config);
        return {data: res.data};
    } catch (error: any) {
        console.log('ERROR', error);
        return {error};
    }
};


