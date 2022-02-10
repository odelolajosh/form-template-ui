import { useState, useEffect } from "react"

const usePagination = (data=[], initialPage = 1, limit = 15) => {
  const [result, setResult] = useState([])
  const [page, setPage] = useState(initialPage)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    // calculate total pages 
    const totalItems = data.length
    const totalPages = Math.ceil(totalItems / limit);

      // calculate start and end item indexes
    const startIndex = (page - 1) * (limit);
    const endIndex = Math.min(startIndex + limit, totalItems - 1);

    setResult(data.slice(startIndex, endIndex))
    setTotalPages(totalPages)
  }, [page, limit, data])

  const nextPage = () => {
    if (page < totalPages)
      setPage(page + 1)
  }

  const prevPage = () => {
    if (page > 1)
      setPage(page - 1)
  }

  return [result, page, totalPages, prevPage, nextPage]
}

export default usePagination;