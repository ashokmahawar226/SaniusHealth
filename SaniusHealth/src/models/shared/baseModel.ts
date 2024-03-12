export interface IBaseModel {
    id: string;
    createdAt: number;
    lastUpdatedAt: number;
    deleted: boolean;
    updateHistory?: IUpdateData[];
}

export interface IUpdateData {
    updates: IResourceUpdate[];
    updatedAt: number;
    updatedBy?: string;
}

export interface IResourceUpdate {
    key: string;
    oldValue: any;
    newValue: any;
}
