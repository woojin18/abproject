import axios from "axios";

const BASE_URL = "http://localhost:8080/api/transactions";

// 거래 생성
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

// 거래 조회
export const getTransactions = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

// 거래 업데이트
export const updateTransaction = async (id, updates) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updates, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating transaction:", error);
    throw error;
  }
};

// 거래 삭제
export const deleteTransaction = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting transaction:", error);
    throw error;
  }
};