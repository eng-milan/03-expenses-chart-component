import { useState } from "react"
import Chart from "./Chart"
import data from "../data/data.json"

function ExpensesChart() {
    const [focusedBar, setFocusedBar] = useState("")

    const onMouseOver = (day) => {
        setFocusedBar(day)
    }

    const onMouseLeave = () => {
        setFocusedBar("")
    }

    return <div className="p-6 bg-white rounded-xl" onMouseLeave={onMouseLeave}>
        <h1 className="mb-10 text-[30px]">Spending - Last 7 days</h1>
        <Chart data={data} onMouseOver={onMouseOver} focusedBar={focusedBar} />
        <hr className="mt-6" />
        <div className="mt-6 flex justify-between">
            <div>
                <p className="text-[15px] text-gray-500">Total this month</p>
                <p className="text-[30px] font-bold">$478.33</p>
            </div>
            <div className="flex flex-col justify-end">
                <p className="text-right font-bold">+2.4%</p>
                <p className="text-gray-500">from last month</p>
            </div>
        </div>
    </div>
}

export default ExpensesChart