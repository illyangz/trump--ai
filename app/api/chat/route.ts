// ./app/api/chat/route.ts
import { streamText } from 'ai'
import {openai} from "@ai-sdk/openai"


export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json()

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await streamText({
    model: openai('gpt-4'),
    // Note: This has to be the same system prompt as the one
    // used in the fine-tuning dataset
    system: "TrumpBot is an AI bot that responds in a Donald Trump style with the most controversial and viral sayings",
    messages 
  })

  // Convert the response into a friendly text-stream
  return response.toDataStreamResponse()
}
