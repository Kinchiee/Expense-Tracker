import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import React, {useState} from 'react'

function App() {
  const dummy_expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 10)
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 300,
        date: new Date(2019, 7, 10)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 297.65,
        date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'Car Repair',
      amount: 100,
      date: new Date(2023, 2, 28)
  }]
  const [expenses, setNewExpenses] = useState(dummy_expenses)

  const addExpenseHandler = (expense) => {
    setNewExpenses((prevState) => {
      return [expense, ...prevState]
    })
  }
  
  return (
    <div className="App">
      <h1>Let's get Started</h1>
      <NewExpense onAddExpense ={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
