export interface IPageState {
    loading: boolean;
}

export interface IPageData {
    limit?: number;
    offset?: number;
    sort?: string;
    order?: string;
    [key: string]: any;
}

export interface IListData<ListType> {
    list: ListType[] | [];
    count: number;
}

export enum EMessageType {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info',
}
