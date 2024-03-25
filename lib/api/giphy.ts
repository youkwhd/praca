const BASE_URL = "https://api.giphy.com";
const API_KEY: string = process.env["GIPHY_API_KEY"] || "";
const FALLBACK_GIF =  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3NtYTV5Ym55M20xeXpnM2tlMjQ0YmR1YWg5cmUxZWJ5aGd2d3E1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vb72Ie9WUDbDYm0hZg/giphy-downsized.gif";

export const getRandomGIF = async (): Promise<string> => {
    const url = new URL(`${BASE_URL}/v1/gifs/random`);
    const queries = new URLSearchParams();

    queries.append("api_key", API_KEY);

    const response: Response = await fetch(`${url.toString()}?${queries.toString()}`);
    const json: any = await response.json();

    if (json["data"].length <= 0) {
        return FALLBACK_GIF;
    }

    return json["data"]["images"]["original"]["webp"];
}

export const getNotFoundGIF = async (): Promise<string> => {
    const url = new URL(`${BASE_URL}/v1/gifs/search`);
    const queries = new URLSearchParams();

    const keywords = ["Where am I", "I am blind", "Am I supposed to be here", "We're lost", "I don't know", "HUH", "Ben 10 lost his way", "This is surely fine", "404 Where is this", "Cartoon funny"];

    queries.append("api_key", API_KEY);
    queries.append("q", keywords[Math.floor(Math.random() * keywords.length)]);

    const response: Response = await fetch(`${url.toString()}?${queries.toString()}`);
    const json: any = await response.json();

    if (json["data"].length <= 0) {
        return FALLBACK_GIF;
    }

    const gifs: any[] = json["data"];
    return gifs[Math.floor(Math.random() * gifs.length)]["images"]["original"]["webp"];
}
