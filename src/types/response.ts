type Response = {
  code: string;
  message: string;
};

export type SuccessResponse<TData> = Response & {
  data: TData;
};

export type FailResponse = Response;
