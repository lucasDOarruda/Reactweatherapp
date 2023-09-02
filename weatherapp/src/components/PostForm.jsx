import React, { useState, useEffect } from 'react';

function BudgetCalculator() {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemAmount, setItemAmount] = useState(0);
  const [budget, setBudget] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(0);

  useEffect(() => {
    // Calculate total income by summing amounts of items with positive amounts
    const totalIncome = incomeList.reduce((total, item) => {
      return item.amount > 0 ? total + item.amount : total;
    }, 0);
  
    // Calculate total expense by summing amounts of items with negative amounts
    const totalExpense = expenseList.reduce((total, item) => {
      return item.amount < 0 ? total - item.amount : total;
    }, 0);
  
    // Calculate the remaining budget based on the provided budget
    const remaining = budget - (totalExpense - totalIncome);
  
    setRemainingAmount(remaining);
  }, [incomeList, expenseList, budget]);
  

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleItemAmountChange = (e) => {
    setItemAmount(parseFloat(e.target.value));
  };

  const addItemToList = () => {
    if (itemName && itemAmount) {
      const newItem = { name: itemName, amount: itemAmount };
      if (itemAmount >= 0) {
        setIncomeList([...incomeList, newItem]);
      } else {
        setExpenseList([...expenseList, newItem]);
      }
      setItemName('');
      setItemAmount(0);
    }
  };

  const removeItem = (listType, index) => {
    if (listType === 'income') {
      const updatedIncomeList = [...incomeList];
      updatedIncomeList.splice(index, 1);
      setIncomeList(updatedIncomeList);
    } else if (listType === 'expense') {
      const updatedExpenseList = [...expenseList];
      updatedExpenseList.splice(index, 1);
      setExpenseList(updatedExpenseList);
    }
  };

  const setBudgetAmount = (e) => {
    setBudget(parseFloat(e.target.value));
  };

  return (
    <div className='container'>
      <h1>Budget Calculator</h1>
      <div>
        <h2>Total Budget: ${budget}</h2>
        <input
          type="number"
          placeholder="Set Budget"
          value={budget}
          onChange={setBudgetAmount}
        />
        <h3>Remaining Budget: ${remainingAmount}</h3>
        {remainingAmount > 0 ? (
          <p>You will have a surplus of ${remainingAmount}</p>
        ) : remainingAmount < 0 ? (
          <p>You will be overspending by ${-remainingAmount}</p>
        ) : (
          <p>Your budget will be balanced</p>
        )}
      </div>
      <div>
        <h3>Income List</h3>
        <ul>
          {incomeList.map((item, index) => (
            <li key={index}>
              {item.name}: ${item.amount}{' '}
              <button onClick={() => removeItem('income', index)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Expense List</h3>
        <ul>
          {expenseList.map((item, index) => (
            <li key={index}>
              {item.name}: ${item.amount}{' '}
              <button onClick={() => removeItem('expense', index)}>Remove</button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            placeholder="Item Name"
            value={itemName}
            onChange={handleItemNameChange}
          />
          <input
            type="number"
            placeholder="Item Amount"
            value={itemAmount}
            onChange={handleItemAmountChange}
          />
          <button onClick={addItemToList}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default BudgetCalculator;
