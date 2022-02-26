export interface IItemsResponse<T> {
  items: T;
  meta: {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}
