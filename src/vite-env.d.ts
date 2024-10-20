/// <reference types="vite/client" />

type LangType = "ja" | "hi" | "en" | "fr" | "es"

type WordType ={
    word: string,
    meaning : string,
    options : string[];
}
interface StateType  {
    loading: boolean;
    result : string[];
    error?:string;
    words : WordType[];
}
