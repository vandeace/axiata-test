export interface TResponse<T> {
  data: T[]
  count: number
  currentPage: number
  totalPages: number
}

export type TPaginatedRequest<T> = {
  page: number
  filter?: T
  limit: number
}
