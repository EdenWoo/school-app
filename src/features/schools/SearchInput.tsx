import React, { useState } from "react"

interface Props {
  onSearch: (value: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
  const [keyword, setKeyword] = useState("")
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleSearch = () => {
    onSearch(keyword)
  }

  const handleClear = () => {
    setKeyword("")
    onSearch("")
  }

  return (
    <div className="flex space-x-4">
      <div className="flex rounded-md overflow-hidden w-full">
        <input
          type="text"
          className="w-full rounded-md border border-gray-500 rounded-r-none pl-2 text-lg"
          value={keyword}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-2 md:px-6 text-lg font-semibold py-3 rounded-r-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <button
        className="bg-white text-gray-500 md:px-6 font-semibold py-3 rounded-md"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  )
}
export default SearchInput
