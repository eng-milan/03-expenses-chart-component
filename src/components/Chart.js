import classNames from "classnames"

function Chart({ data, focusedBar, onMouseOver }) {

    const renderedBars = data.map((bar) => {
        let dayOfTheWeek = ""

        switch (new Date().getDay()) {
            case 0:
                dayOfTheWeek = "sun"
                break
            case 1:
                dayOfTheWeek = "mon"
                break
            case 2:
                dayOfTheWeek = "tue"
                break
            case 3:
                dayOfTheWeek = "wed"
                break
            case 4:
                dayOfTheWeek = "thu"
                break
            case 5:
                dayOfTheWeek = "fri"
                break
            case 6:
                dayOfTheWeek = "sat"
                break
            default:
                break
        }


        const classes = classNames("w-[40px] rounded cursor-pointer", {
            "bg-[#76b5bc] hover:bg-[#8ad5dd]": bar.day === dayOfTheWeek,
            "bg-red-400 hover:bg-red-300": bar.day !== dayOfTheWeek,
        })

        return <div key={bar.day} className="flex flex-col items-center relative mx-[1px]">
            {focusedBar === bar.day ? <p className="absolute -top-8 text-sm font-bold mb-1 px-2 py-1 bg-black text-white rounded-md">{bar.amount}</p> : null}
            <div style={{ height: `${Math.round(bar.amount) * 5}px` }} className={classes} onMouseOver={() => onMouseOver(bar.day)}></div>
            <p className="text-center">{bar.day}</p>
        </div >
    })

    return <div className="flex justify-between items-end">
        {renderedBars}
    </div>
}

export default Chart