export interface Post {
    title: string;
    description: string;
    slug: string;
    date: string;
    content: {
        html: string;
    };
    tags: string;
    map: string;
    coverImage: {
        url: string;
    };
    authors: {
        name: string;
        intro: string;
        picture: {
            url: string;
        };
    };
    createdAt: string;
}
