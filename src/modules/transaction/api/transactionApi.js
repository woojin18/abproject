import axios from "axios";

const BASE_URL = "http://localhost:8080/api/transactions";

export const createTransaction = async (transaction) => {
  try {
    const response = await axios.post(BASE_URL, transaction, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }
};