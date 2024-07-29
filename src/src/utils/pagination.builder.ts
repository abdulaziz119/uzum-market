import { PaginationResponse } from './pagination.response';

export const getPaginationResponse = function <T>(
  data: T[],
  page: number,
  limit: number,
  total_count: number,
): PaginationResponse<T[]> {
  const responseBody: PaginationResponse<T[]> = {
    pagination: {
      current: page,
      previous: 0,
      next: 0,
      perPage: limit,
      totalPage: Math.ceil(total_count / limit),
      totalItem: total_count,
    },
    result: data,
  };

  if (!data || data.length === 0) return responseBody;

  responseBody.pagination.current = page;
  responseBody.pagination.perPage = limit;
  responseBody.pagination.totalItem = total_count;
  responseBody.pagination.totalPage = Math.ceil(total_count / limit);
  responseBody.pagination.previous = page > 1 ? page - 1 : 0;
  responseBody.pagination.next = total_count >= page * limit ? page + 1 : 0;
  return responseBody;
};
