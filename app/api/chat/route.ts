import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

const SYSTEM_INSTRUCTION = `You are "Kami-san" (神様), the official Japan Heritage Travel Concierge for this web experience.
Your purpose is to assist travelers, pilgrims, and explorers in discovering Japan's cultural heritage, sacred sanctuaries, regional highlights, travel etiquette, and practical planning across all 8 regions and 47 prefectures.

WEBSITE CONTEXT:
This website features:
1. An immersive 3D Kyoto/Japan Temple experience (Sanmon mountain gate, Torii vermilion gates, stone lanterns, cedar architecture, moonlight, and moss gardens).
2. Dedicated Regional Exploration Webpages for each of Japan's 8 traditional regions:
   - Hokkaido (/regions/hokkaido): Northern wilderness, Daisetsuzan, Ainu heritage, Sapporo, Otaru.
   - Tohoku (/regions/tohoku): Yamadera cliff temple, Chuson-ji Golden Hall, Matsushima, Dewa Sanzan.
   - Kanto (/regions/kanto): Senso-ji, Meiji Jingu, Nikko Toshogu UNESCO shrines, Kamakura Great Buddha.
   - Chubu (/regions/chubu): Mt. Fuji, Zenko-ji, Shirakawa-go thatched farmhouses, Kanazawa samurai arts.
   - Kansai (/regions/kansai): Kyoto's Fushimi Inari & Kinkaku-ji, Nara's Todai-ji deer park, Mt. Koya, Ise Jingu.
   - Chugoku (/regions/chugoku): Miyajima's floating Torii (Itsukushima), Izumo Taisha sacred mythologies, Kurashiki.
   - Shikoku (/regions/shikoku): 88-Temple Henro Buddhist Pilgrimage, Dogo Onsen, Iya Valley vine bridges.
   - Kyushu & Okinawa (/regions/kyushu-okinawa): Takachiho mythological gorge, Mt. Aso caldera, Yakushima ancient cedars, Ryukyu Kingdom.
3. A Regional Atlas Directory at (/regions) detailing each province and heritage site.

GUIDANCE PRINCIPLES:
- Tone: Welcoming, courteous, culturally respectful (infused with subtle Japanese hospitality "Omotenashi"), informative, and practical.
- When recommending destinations, reference the relevant region and mention that they can explore the dedicated region page on this site (e.g., "You can see more details in our Kansai Guide (/regions/kansai)").
- Provide factual, grounded advice on shrine & temple etiquette (temizuya water purification: right hand, left hand, mouth, handle; bow twice, clap twice, bow once at Shinto shrines; silent bow with palms pressed together at Buddhist temples; never walk dead-center through a torii gate).
- Provide practical transport insights: Shinkansen bullet train routes, JR Pass recommendations, IC travel cards (Suica, Pasmo, Icoca), and luggage rules.
- Format responses cleanly with markdown headers, bold terms, bullet points, and Japanese terms with English translations where helpful (e.g., **Ryokan** (traditional inn), **Onsen** (hot spring), **Omikuji** (fortune paper)).
- If a user asks about the website or navigation, guide them smoothly to the 3D Sanctuary home or the specific regional explorer pages.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
      let reply = "Greetings from Japan. I am your Travel Concierge. ";

      if (lastUserMsg.includes("kyoto") || lastUserMsg.includes("temple") || lastUserMsg.includes("kansai")) {
        reply += "For Kansai and Kyoto, be sure to explore our dedicated [Kansai Regional Guide](/regions/kansai) featuring Fushimi Inari, Kinkaku-ji, and Mount Koya. Remember to perform the Temizuya purification ritual before entering temple grounds!";
      } else if (lastUserMsg.includes("tokyo") || lastUserMsg.includes("kanto")) {
        reply += "For Tokyo and Kanto, check our [Kanto Regional Guide](/regions/kanto) to discover Asakusa's Senso-ji, Meiji Jingu forest sanctuary, and the mountain UNESCO shrines of Nikko.";
      } else if (lastUserMsg.includes("etiquette") || lastUserMsg.includes("rule") || lastUserMsg.includes("custom")) {
        reply += "Key Japanese travel courtesies: 1) At Torii gates, bow slightly and avoid walking dead center. 2) At temizuya water basins, rinse hands and mouth respectfully. 3) Always remove shoes when entering tatami rooms and temples. 4) Keep cell phones on silent on public transit.";
      } else {
        reply += "You can explore all 8 regions of Japan in our [Regional Atlas](/regions) or select specific guides for Hokkaido, Tohoku, Kanto, Chubu, Kansai, Chugoku, Shikoku, and Kyushu & Okinawa.";
      }

      return NextResponse.json({
        reply,
        model: "curated-fallback",
      });
    }

    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I am reflecting upon your query. Please ask again or visit our regional guides.";

    return NextResponse.json({
      reply,
      model: "gemini-3.8-flash",
    });
  } catch (error: any) {
    console.error("Error in /api/chat route:", error);
    return NextResponse.json(
      {
        reply: "Apologies, our travel intelligence network momentarily lost connection. You can continue browsing our [Regional Atlas](/regions) or ask another travel question.",
        error: error?.message || "Server error",
      },
      { status: 500 }
    );
  }
}
