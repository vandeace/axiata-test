"use client"
import React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import useMutableSearchParams from "@/hooks/utils/param"
interface TPaginationProductList {
  lastPage: number
}
const PaginationPostList = ({ lastPage }: TPaginationProductList) => {
  const searchParam = useMutableSearchParams()
  const currentPageParam = !!searchParam.get("page")
    ? Number(searchParam.get("page"))
    : 1
  return (
    <div className="p-4">
      <Pagination currentPage={currentPageParam} lastPage={lastPage}>
        <PaginationContent>
          <PaginationItem aria-disabled>
            <PaginationPrevious
              href="#"
              onClick={() => {
                if (currentPageParam === 2) {
                  searchParam.delete("page")
                } else {
                  searchParam.set("page", String(currentPageParam - 1))
                }
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{currentPageParam}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() =>
                searchParam.set("page", String(currentPageParam + 1))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PaginationPostList
