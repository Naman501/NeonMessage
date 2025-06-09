import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);
export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
export const DATABASE_ID=import.meta.env.VITE_DATABASE_ID;
export const COLLECTION_ID_MESSAGES=import.meta.env.VITE_COLLECTION_ID_MESSAGES;

export { client, account, databases };
