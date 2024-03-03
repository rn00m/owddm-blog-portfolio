/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly HYGRAPH_ENDPOINT: string;
    PUBLIC_ENDPOINT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}