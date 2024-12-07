import React from 'react'

const NoData = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-6 h-96">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ width: "6rem", height: "6rem" }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v1a3 3 0 003 3h0a3 3 0 003-3v-1m-4-4a3 3 0 100-6 3 3 0 000 6zm10-6h.01M4 8h.01M8 20h8m4-10v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m0-2a2 2 0 012-2h12a2 2 0 012 2v2"
                />
            </svg>
            <p className="text-gray-600 mt-4 text-lg">No data available</p>
        </div>
    )
}

export default NoData