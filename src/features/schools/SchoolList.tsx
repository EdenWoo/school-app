import React, {useEffect, useState} from "react"
import {Pagination} from "antd"
import axios from "axios"
import SearchInput from "./SearchInput"
import {School} from "./Index"
import SkeletonItem from "./SkeletonItem"
import SchoolItem from "./SchoolItem"

const SchoolList = () => {
  const [schools, setSchools] = useState<School[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [keyword, setKeyword] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    searchSchools()
  }, [keyword, page, pageSize])

  const searchSchools = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
          `https://catalogue.data.govt.nz/api/3/action/datastore_search?resource_id=20b7c271-fd5a-4c9e-869b-481a0e2453cd&q=${keyword}&limit=${pageSize}&offset=${
              (page - 1) * pageSize
          }`
      )
      setSchools(response?.data?.result?.records)
      setTotal(response.data.result.total)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const handleSearch = (value: string) => {
    setPage(1)
    setTotal(0)
    setKeyword(value ?? "")
  }
  return (
      <>
        <div className="p-4 max-w-screen-xl mx-auto">
          <div className="flex mb-4">
            <div className="m-auto md:w-1/2">
              <SearchInput onSearch={handleSearch}/>
            </div>
          </div>

          {!loading && (
              <div className="grid grid-cols-1 gap-4">
                {schools.map((item) => (
                    <SchoolItem key={item._id} school={item}/>
                ))}
              </div>
          )}

          {loading && (
              <div className="grid grid-cols-1 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <SkeletonItem key={item}></SkeletonItem>
                ))}
              </div>
          )}

          {schools?.length > 0 && (
              <div className="flex mt-4">
                <Pagination
                    className="m-auto"
                    onChange={(page: number, pageSize: number) => {
                      setPage(page)
                      setPageSize(pageSize)
                    }}
                    current={page}
                    defaultCurrent={1}
                    pageSize={pageSize}
                    total={total}
                    showSizeChanger={true}
                />
              </div>
          )}
        </div>
      </>
  )
}
export default SchoolList
