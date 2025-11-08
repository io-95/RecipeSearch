import axios from "axios"

export class ApiError extends Error {
  constructor({ status, message, data }) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      throw new ApiError({
        status: error.response.status,
        message: error.response.data?.message || error.message,
        data: error.response.data,
      });
    } else if (error.request) {
      throw new ApiError({
        status: null,
        message: "No response from server",
        data: null,
      });
    } else {
      throw new ApiError({
        status: null,
        message: `unable to build request: ${error.message}`,
        data: null,
      });
    }
  }
);

export async function safeApiCall(requestFn) {
  try {
    const response = await requestFn();
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

function handleApiError(error) {
  if (error instanceof ApiError) {
    console.error(`[API ERROR] ${error.status || "?"}: ${error.message}`);
  } else {
    console.error("[UNKNOWN ERROR]", error);
  }
}

export default api