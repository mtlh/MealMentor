/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { type NextApiRequest, type NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
  
export default async function GetInstructIngred(req: NextApiRequest, res: NextApiResponse<any>) {
    
    const openai = new OpenAIApi(configuration);
    const messages = [];
    messages.push({ role: "user", content: req.query.message });
    // @ts-ignore q
    const completion = await openai.createChatCompletion({model: "gpt-3.5-turbo", messages: messages, max_tokens: 500});
    const text = completion.data.choices[0]?.message;

    res.status(200).json({result: text?.content});
}