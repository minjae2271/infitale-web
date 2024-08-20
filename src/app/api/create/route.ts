// import OpenAI from "openai";
import { ChatOpenAI } from "@langchain/openai";
import { StructuredOutputParser, JsonOutputParser  } from "@langchain/core/output_parsers";
import { ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate, } from "@langchain/core/prompts";
import { NextResponse } from "next/server";

import { z } from 'zod';
import { Story } from "@/model/Story";

export const runtime = 'edge';

export async function POST(req: Request) {
    const reqData = await req.json()

    const input_character = reqData.character
    const input_theme = reqData.theme
    const input_background = reqData.background

    console.log(reqData)

    const chat = new ChatOpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        model: 'gpt-3.5-turbo',
        temperature: 1,
        maxTokens: 1000
    })

    const response_schemas = z.object({
        title: z.string().describe('A title of children book story'),
        story: z.string().array().describe('A comma separated list contains each chapter of children book story. Each value is Json format that has keys of "title" and "content". title is for title of a chapter. content is for content of a chapter.')
    });

    const output_parser = StructuredOutputParser.fromZodSchema(response_schemas);
    const format_instructions = output_parser.getFormatInstructions();

    const sysTemplate = `You are a children story teller who writes wonderful stories for children.
        The words and phrases must follow strict rule that makes the story appropriate for children.
        Use the character, theme and background delimited by ####.
        character:####{input_character}####
        theme:####{input_theme}####
        background:####{input_background}####
        {format_instructions}
        `
    const humanTemplate = `Please Give me 5 chapters of a children book story. Each chapter must be within 250 tokens.`

    const sysMessagePrompt = SystemMessagePromptTemplate.fromTemplate(sysTemplate);
    const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(humanTemplate);

    const chatPrompt = ChatPromptTemplate.fromMessages([
        sysMessagePrompt,
        humanMessagePrompt,
    ])

    const parser = new JsonOutputParser<Story>();
    // const partialedPrompt = await chatPrompt.partial({
    //     format_instructions: format_instructions
    // });

    const chain = chatPrompt.pipe(chat).pipe(parser)
    const res = await chain.invoke({input_character: input_character, input_theme: input_theme, input_background: input_background, format_instructions: format_instructions})

    // const chain = chatPrompt.pipe(chat)
    // const res = await chain.invoke({
    //     input_character: input_character, input_theme: input_theme, input_background: input_background, format_instructions: format_instructions
    // })
    console.log(typeof res)
    console.log(res)

    return NextResponse.json(res)
};
