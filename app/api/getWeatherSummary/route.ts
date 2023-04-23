import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  // weatherdata in th body of the POST req
  const { weatherData } = await request.json();

  const formatedData = JSON.stringify(weatherData);

  // console.log("API DATA:", JSON.stringify(weatherData));

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "Pretend you're a weather new presenter presenting LIVE on television, be energetic and full of charisma. Introduce youself as Macro. State the city you are providing a summary for. Then give a summary of todays weather only. Make it easy for the viewer to undersant and know what to do to prepare for those weather conditions such as wear SPF if the UV is high, etc. use the uv_index data provided to provide UV advice. Provide a joke regarding the weather. Assume the data came from your team at the news office and not the user.",
      },
      {
        role: "user",
        content: `Hi there, can i get a summary of the weather, use the following information to get the weather data: ${formatedData}`
      },
    ],
  });

  const { data } = response;

  return NextResponse.json(data.choices[0].message);
}
