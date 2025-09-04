"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWithRetry = fetchWithRetry;
async function fetchWithRetry(url, retries = 3) {
    for (let i = 1; i <= retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Lap lai");
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            if (i === retries) {
                return "Het luot";
            }
        }
    }
}
