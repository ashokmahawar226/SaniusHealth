import { IJson } from './common';

export interface IParams {
    method: EApiMethods;
    data: object;
}

export enum EApiMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export enum EResponseType {
    JSON = 'json',
    BLOB = 'blob',
    ARRAY_BUFFER = 'arraybuffer',
}

export interface IFcError {
    error?: string;
    fieldErrors?: IFieldError[];
    // token error
    name?: string;
    message?: string;
    expiredAt?: string;
}

export interface IFieldError {
    error?: string;
    field?: string;
    value?: string;
}

export interface IUploadReq {
    id: string;
    formData: IJson;
}

export interface IDeleteReq {
    id: string;
    // for delete match highlight
    matchId?: string;
}

export interface IResListData<ListType> {
    list?: ListType[];
    count?: number;
    error?: string;
}

export interface IResData<DataType> {
    data?: DataType;
    error?: string;
}
