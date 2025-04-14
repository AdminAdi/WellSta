// Configuration for the server
export const JWT_KEY = "mindfeed-secret-key-2025";
export const MONGO_DB = process.env.MONGODB_URI || "mongodb+srv://mindfeed-app:hackathon2025@cluster0.mongodb.net/mindfeed?retryWrites=true&w=majority";
export const PORT = process.env.PORT || 4000;
