export interface Pagination {
  page?: number;
  size?: number;
  totalElements?: number;
  totalPage?: number;
  currentElements?: number;
  currentPage?: number;
  orderBy?: string;
  sortBy?: string;
  limit?: number;
}

export interface ResponseBody<T> {
  common: {
    code: number;
    message: string;
  };
  data: {
    value: T;
    pagination?: Pagination;
  };
}
