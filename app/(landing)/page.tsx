import Image from 'next/image'
import ChatComponent from '../../components/ChatComponent'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-6">
            <div className="bg-gray-800 p-6 w-full max-w-3xl rounded-md text-green-200 shadow-lg">
                <h2 className="text-3xl mb-4 text-center">Yoda Chat Bot</h2>
                <ChatComponent />
            </div>
        </main>
    )
}