export interface Pagination {
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  numberOfElements?: number;
  first: boolean; // 첫 패이지 여부
  empty: boolean; // 리스트가 비어 있는지 여부
}
