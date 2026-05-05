export interface Quote {
    id: number;
    author: string;
    content: string;
    tags: string[];
}

export interface QuoteApiResponse {
    statusCode: number;
    data: {
        page: number;
        limit: number;
        totalPages: number;
        previousPage: boolean;
        nextPage: boolean;
        totalItems: number;
        data: Quote[];
    };
    message: string;
    success: boolean;
}