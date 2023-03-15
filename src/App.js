import Header from "./components/Header"
import ExpensesChart from "./components/ExpensesChart"
import Footer from "./components/Footer"

function App() {
    
    return <main className="flex justify-center h-screen px-[5%] pt-[120px]">
        <div>
            <Header />
            <ExpensesChart />
            <Footer />
        </div>
    </main>
}

export default App