import { getUser } from "@/app/actions/cookies";
import { BASE_URL } from "./baseUrl";

const apiService = {
  async request(url, method, data) {
    const user = await getUser("user");
    const authToken = user;
    const headers = {
      credentials: "include",
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    };

    if (authToken) {
      headers["Authorization"] = `Bearer ${authToken?.token}`;
    }

    let options = {
      method,
      headers,
    };

    if (method !== "GET" && data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${BASE_URL}${url}`, options);

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const responseData = await response.json();
        return responseData;
      } else {
        console.error("Error: Expected JSON but received", contentType);
        throw new Error(`Expected JSON but received ${contentType}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error(error.message);
    }
  },
};

export default apiService;
