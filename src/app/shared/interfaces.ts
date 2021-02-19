
export interface IResource {
  id: number|string;
};

export interface ISerializer {
  fromJson(json: any): IResource;
  toJson(resource: IResource): any;
}

export interface IApiResponse {
  status: boolean;
  error?: string;
}

export interface IFactory {
  id: number;
  factoryName?: string;
  factoryOwner?: string;
  // scheduleInWaves?: boolean;
  status?: string;
  // templates?: ITemplate[];
}
