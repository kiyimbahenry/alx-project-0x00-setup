import Card from "@/components/Card"

const Home: React.FC = () => {
    return (
        <main className="flex flex-col items-center p-8">
            <h1 className="text-4xl font-semibold mb-8">Airbnb Application Clone system</h1>
            <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full mb-8">
                Get Started
            </button>
            <Card />
        </main>
    )
}

export default Home
