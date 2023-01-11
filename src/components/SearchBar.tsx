import router from "next/router";
import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("")

    function sendSearch() {
        router.push({
            pathname: '/results',
            query: {
                q: query
            }
        })
    }

    return (
        <div className="relative">
            <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            <input type={"text"}
                className="block w-full p-4 pl-10 text-sm border 
                    border-gray-300 rounded-lg bg-gray-50 focus:#000"
                placeholder="Search for artists"
                onChange={e => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        {sendSearch()}
                    }
                }}
            ></input>
        </div>

    )
}