"use client"
import { useChat, Message } from "ai/react"
import {useState} from "react";

export default function ChatComponent() {
    const {messages, input, handleSubmit, setInput} = useChat();

    return (
        <div className="w-full max-w-3xl p-6 bg-gray-800 rounded-md shadow-lg text-green-200">
            {messages.map((message : Message) => {
                return (
                    <div key={message.id} className={`mb-4 flex ${message.role === "assistant" ? "text-left flex-row" : "text-right flex-row-reverse"}`}>
                        {
                            message.role === "assistant"
                                ?
                                <div className="flex-shrink-0 mr-4">
                                    <img src="../icon.png" alt="Yoda" className="w-10 h-10 rounded-full" />
                                </div>
                                :
                                null
                        }
                        <div>
                            {
                                message.role === "assistant"
                                    ?
                                    <h3 className="text-lg font-semibold mt-2">
                                        Yoda
                                    </h3>
                                    :
                                    <h3 className="text-lg font-semibold mt-2">
                                        User
                                    </h3>
                            }
                            {message.content.split("\n").map((currentTextBlock: string, index : number) => {
                                return (
                                    <p key={message.id + index} className="mt-1">
                                        {currentTextBlock === "" ? "\u00A0" : currentTextBlock}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                )
            })}

            <form className="mt-6" onSubmit={handleSubmit}>
                <p className="text-sm">User Message</p>
                <textarea
                    className="mt-2 w-full bg-gray-700 p-3 rounded-md text-white"
                    placeholder="Speak, you must"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="text-gray-800 rounded-md bg-lime-800 p-2 mt-4 hover:bg-lime-700 transition duration-200">
                    Send Message
                </button>
            </form>
        </div>
    )
}