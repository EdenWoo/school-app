import React from "react"

const SkeletonItem = () => {
    return (
        <div className="rounded-lg shadow-lg bg-white p-4">
            <div className="animate-pulse flex flex-col gap-2">
                <div className="h-7 bg-gray-300 rounded max-w-[320px]"></div>
                <div className="h-7 bg-gray-300 rounded max-w-[800px]"></div>
                <div className="h-7 bg-gray-300 rounded max-w-[800px]"></div>
                <div className="h-7 bg-gray-300 rounded max-w-[400px]"></div>
            </div>
        </div>
    )
}

export default SkeletonItem
