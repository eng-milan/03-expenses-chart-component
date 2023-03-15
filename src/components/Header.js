import logo from "../images/logo.svg"

function Header() {
    return <div className="mb-4 p-6 flex justify-between rounded-xl bg-[#ec775f] text-white">
        <div>
            <h2 className="font-bold">My balance</h2>
            <h2 className="font-bold text-[28px]">$921.48</h2>
        </div>
        <img src={logo} alt="logo" />
    </div>
}

export default Header