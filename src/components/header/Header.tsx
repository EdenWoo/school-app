import React from "react"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div className="flex p-4">
            <Link to="/schools">
                <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                    New Zealand Schools
                </div>
            </Link>
        </div>
    )
}
