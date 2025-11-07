import api from "./api"

export async function getHealth() {
    const healthStatus = await api.get('/health')
    console.log(healthStatus)
}

export async function searchRecipes(querry) {
    
}