// route.ts Route Handlers
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge'; // Provide optimal infrastructure for our API route (https://edge-runtime.vercel.app/)

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config);


// POST localhost:3000/api/chat
export async function POST(request: Request) {
    const { messages } = await request.json(); // { messages: [] }

    const response = await openai.createChatCompletion({
        model: 'gpt-4o-mini',
        stream: true,
        messages: [
            { role: "system", content: "you are Yoda" },
            ...messages
        ]
    })

    // create a stream of data from OpenAI (stream data to the frontend)
    const stream = await OpenAIStream(response);

    // send the stream as a response to our client / frontend
    return new StreamingTextResponse(stream);
}