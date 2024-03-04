type Response = {
  code: string;
  message: string;
};

export type SuccessResponse<TData> = Response & {
  data: TData;
};

export type FailResponse = Response;

export type Pages = {
  totalPages: number;
  totalElements: number;
  currentPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
};
