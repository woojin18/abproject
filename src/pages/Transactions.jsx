// src/pages/Transactions.jsx
import React, { useState, useCallback, useEffect } from 'react';
import { Typography, TextField, IconButton, List, ListItem, Grid, Box, Select, MenuItem, Divider } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import dayjs from 'dayjs';

function Transactions() {
    const [selectedMonth, setSelectedMonth] = useState(dayjs().format('YYYY-MM'));
    const [days, setDays] = useState([]);
    const [incomeItems, setIncomeItems] = useState({});
    const [expenses, setExpenses] = useState({});
    const [totalBalance, setTotalBalance] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
        setDays([]); // 월이 바뀔 때 날짜 목록 초기화
    };

    const handleDateChange = (newDate) => {
        const day = newDate.date();
        if (!days.includes(day)) {
            setDays([...days, day]);
        }
    };

    const removeDay = (day) => {
        setDays(days.filter((d) => d !== day));
        setIncomeItems((prev) => {
            const updated = { ...prev };
            delete updated[day];
            return updated;
        });
        setExpenses((prev) => {
            const updated = { ...prev };
            delete updated[day];
            return updated;
        });
    };

    const addIncome = (day) => {
        setIncomeItems({
            ...incomeItems,
            [day]: [...(incomeItems[day] || []), { id: Date.now(), description: '', amount: 0 }],
        });
    };

    const removeIncome = (day, id) => {
        setIncomeItems({
            ...incomeItems,
            [day]: incomeItems[day].filter((income) => income.id !== id),
        });
    };

    const handleIncomeChange = (day, id, field, value) => {
        const updatedValue = field === 'amount' ? value.replace(/^0+|[^0-9]/g, '') : value; // 숫자만 남기고, 앞에 0 제거
        setIncomeItems({
            ...incomeItems,
            [day]: incomeItems[day].map((income) =>
                income.id === id ? { ...income, [field]: field === 'amount' ? Number(updatedValue) : updatedValue } : income
            ),
        });
    };

    const addExpense = (day) => {
        setExpenses({
            ...expenses,
            [day]: [...(expenses[day] || []), { id: Date.now(), description: '', amount: 0 }],
        });
    };

    const removeExpense = (day, id) => {
        setExpenses({
            ...expenses,
            [day]: expenses[day].filter((expense) => expense.id !== id),
        });
    };

    const handleExpenseChange = (day, id, field, value) => {
        const updatedValue = field === 'amount' ? value.replace(/^0+|[^0-9]/g, '') : value; // 숫자만 남기고, 앞에 0 제거
        setExpenses({
            ...expenses,
            [day]: expenses[day].map((expense) =>
                expense.id === id ? { ...expense, [field]: field === 'amount' ? Number(updatedValue) : updatedValue } : expense
            ),
        });
    };

    const calculateTotalBalance = useCallback(() => {
        const totalIncome = Object.values(incomeItems).flat().reduce((sum, income) => sum + income.amount, 0);
        const totalExpenses = Object.values(expenses).flat().reduce((sum, expense) => sum + expense.amount, 0);
        setTotalBalance(totalIncome - totalExpenses);
    }, [incomeItems, expenses]);

    useEffect(() => {
        calculateTotalBalance();
    }, [calculateTotalBalance]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ padding: '20px' }}>
                <Grid container alignItems="center" spacing={2} style={{ marginBottom: '20px' }}>
                    <Grid item>
                        <Typography variant="h4">Transactions Page</Typography>
                    </Grid>
                    <Grid item>
                        <Select value={selectedMonth} onChange={handleMonthChange}>
                            {[...Array(12).keys()].map((month) => {
                                const monthValue = dayjs().subtract(month, 'month').format('YYYY-MM');
                                return (
                                    <MenuItem key={monthValue} value={monthValue}>
                                        {monthValue}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6" style={{ color: totalBalance >= 0 ? 'green' : 'red', textAlign: 'right', marginRight: '20px' }}>
                            총액: {totalBalance}
                        </Typography>
                    </Grid>
                </Grid>

                {/* 날짜 추가 영역 */}
                <Box display="flex" alignItems="center" style={{ marginBottom: '20px' }}>
                    <Typography variant="subtitle1" style={{ marginRight: '16px' }}>날짜 추가:</Typography>
                    <DatePicker
                        label="날짜 선택"
                        value={selectedDate}
                        onChange={(newDate) => {
                            setSelectedDate(newDate);
                            handleDateChange(newDate);
                        }}
                        shouldDisableDate={(date) => date.format('YYYY-MM') !== selectedMonth}
                        views={['day']}
                        sx={{ width: 120 }}
                    />
                </Box>

                <Grid container spacing={2}>
                    {days.map((day) => (
                        <React.Fragment key={day}>
                            <Grid item xs={12}>
                                <Box display="flex" alignItems="center">
                                    <Typography variant="h6" style={{ marginRight: '8px' }}>Day {day}</Typography>
                                    <IconButton onClick={() => removeDay(day)} color="secondary">
                                        <RemoveIcon />
                                    </IconButton>
                                </Box>
                                <Grid container spacing={2} alignItems="flex-start">
                                    {/* 소득 항목 - Income */}
                                    <Grid item xs={6}>
                                        <Box display="flex" alignItems="center">
                                            <Typography variant="subtitle1" style={{ marginRight: '8px' }}>소득</Typography>
                                            <IconButton onClick={() => addIncome(day)} color="primary" size="small">
                                                <AddIcon />
                                            </IconButton>
                                        </Box>
                                        <List>
                                            {(incomeItems[day] || []).map((income) => (
                                                <ListItem key={income.id} style={{ display: 'flex', alignItems: 'center' }}>
                                                    <TextField
                                                        type="text"
                                                        value={income.description}
                                                        onChange={(e) => handleIncomeChange(day, income.id, 'description', e.target.value)}
                                                        placeholder="설명"
                                                        variant="outlined"
                                                        sx={{ width: 150, marginRight: 1 }}
                                                    />
                                                    <TextField
                                                        type="text"
                                                        value={income.amount}
                                                        onChange={(e) => handleIncomeChange(day, income.id, 'amount', e.target.value)}
                                                        placeholder="금액"
                                                        variant="outlined"
                                                        sx={{ width: 100 }}
                                                    />
                                                    <IconButton onClick={() => removeIncome(day, income.id)} color="secondary">
                                                        <RemoveIcon />
                                                    </IconButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>

                                    {/* 지출 항목 - Expenses */}
                                    <Grid item xs={6}>
                                        <Box display="flex" alignItems="center">
                                            <Typography variant="subtitle1" style={{ marginRight: '8px' }}>지출</Typography>
                                            <IconButton onClick={() => addExpense(day)} color="primary" size="small">
                                                <AddIcon />
                                            </IconButton>
                                        </Box>
                                        <List>
                                            {(expenses[day] || []).map((expense) => (
                                                <ListItem key={expense.id} style={{ display: 'flex', alignItems: 'center' }}>
                                                    <TextField
                                                        type="text"
                                                        value={expense.description}
                                                        onChange={(e) => handleExpenseChange(day, expense.id, 'description', e.target.value)}
                                                        placeholder="설명"
                                                        variant="outlined"
                                                        sx={{ width: 150, marginRight: 1 }}
                                                    />
                                                    <TextField
                                                        type="text"
                                                        value={expense.amount}
                                                        onChange={(e) => handleExpenseChange(day, expense.id, 'amount', e.target.value)}
                                                        placeholder="금액"
                                                        variant="outlined"
                                                        sx={{ width: 100 }}
                                                    />
                                                    <IconButton onClick={() => removeExpense(day, expense.id)} color="secondary">
                                                        <RemoveIcon />
                                                    </IconButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider sx={{ my: 2 }} />
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>
        </LocalizationProvider>
    );
}

export default Transactions;
