import type { QuoteApiResponse } from "../types/quote";

const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes";

export const fetchQuotes = async (
    page = 1,
    query = ""
) => {
    const url = `${BASE_URL}?page=${page}&limit=10&query=${query}`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch quotes");
    }

    const responseData: QuoteApiResponse = await res.json();

    return {
        ...responseData.data,
        data: responseData.data.data ?? [],
    };
};