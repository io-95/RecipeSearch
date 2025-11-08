import api, { safeApiCall } from "./api"

export async function getHealth() {
    const healthStatus = await safeApiCall(() => api.get('/health'), { fullResponse: true });
    console.log(healthStatus.status);
}

export async function searchRecipes(querry) {
    
}