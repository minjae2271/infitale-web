"use server";

import OpenAI from "openai";

export const createPicture = async (story: string) => {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  try {
      const prompt = `Please draw a turtle for children book from thisstory.
                    `
    
                    const image = await openai.images.generate({ model: "dall-e-3", prompt: prompt, n: 1, size:"1024x1024"});
                    return image;
  } catch(err){
    console.log(err)
  }

};


