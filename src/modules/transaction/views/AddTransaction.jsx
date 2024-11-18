import React, { useState } from 'react';

const AddTransaction = () => {
  const [transaction, setTransaction] = useState({
    type: 'EXPENSE', // 기본값
    amount: '',
    description: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
      });
      if (response.ok) {
        alert('Transaction saved successfully!');
        setTransaction({ type: 'EXPENSE', amount: '', description: '', date: '' });
      } else {
        alert('Failed to save transaction.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type:</label>
        <select name="type" value={transaction.type} onChange={handleChange}>
          <option value="INCOME">Income</option>
          <option value="EXPENSE">Expense</option>
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={transaction.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={transaction.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
