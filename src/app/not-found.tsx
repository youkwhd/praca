import { getNotFoundGIF } from "@/api/giphy";

export default async () => {
    const gif = await getNotFoundGIF();

    return (
        <img src={gif} className="mx-auto mt-7" />
    );
}
