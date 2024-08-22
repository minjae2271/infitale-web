import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const reqData = await req.json();
  const inputText = reqData.text;

  try {
    console.log(inputText)
    const prompt = inputText + "pencil drawing, childish, without any text"

    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      style: "vivid"
    });

    return NextResponse.json(image);

  } catch (err) {
    console.log(err);
  }
}
