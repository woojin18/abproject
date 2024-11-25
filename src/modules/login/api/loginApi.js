import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    if (error.response) {
      // 서버가 응답했을 경우
      console.error("Error message:", error.response.data.error); // 에러 메시지 출력
      throw new Error(error.response.data.error); // 에러 메시지 재전달
    } else if (error.request) {
      // 서버로부터 응답이 없을 경우
      console.error("No response received from server:", error.request);
      throw new Error("No response from server. Please try again later.");
    } else {
      // 요청 생성 중 발생한 에러
      console.error("Unexpected error:", error.message);
      throw new Error("An unexpected error occurred.");
    }
  }
};