import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <InputFields></InputFields>
    </div>
  );
}

const InputFields = () => {
  function useInput({ type, id, label /*...*/ }) {
    const [value, setValue] = useState("");
    const input = (
      <>
        <tr>
          <td>
            <label htmlFor={id}>{label}:</label>
          </td>
          <td>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type={type}
              id={id}
            />
          </td>
        </tr>
      </>
    );
    return [value, input];
  }
  const [initialBalance, setInitialBalance] = useInput({
    type: "number",
    id: "initialBal",
    label: "Initial Balance at start of month",
  });
  const [currentBalance, setBalance] = useInput({
    type: "number",
    id: "currBal",
    label: "Current Balance",
  });
  const [day, setDay] = useInput({
    type: "number",
    id: "day",
    label: "Days in this month",
  });
  const [remainingDay, setRemainingDay] = useInput({
    type: "number",
    id: "day",
    label: "Remaining days in this month",
  });
  const [requiredVal, setRequiredVal] = useInput({
    type: "number",
    id: "reqVal",
    label: "How much more in average",
  });
  const totalVal = (Number(initialBalance) + Number(requiredVal)) * Number(day);
  const amountNeeded =
    (Number(totalVal) -
      Number(currentBalance) * (Number(day) - Number(remainingDay))) /
    Number(remainingDay);

  return (
    <>
      <table>
        <tbody>
          {setInitialBalance}
          {setDay}
          {setRequiredVal}
          {setBalance}
          {setRemainingDay}
        </tbody>
      </table>
      <div>
        Total Balance for {day} days: {initialBalance * day}
      </div>
      <div>{requiredVal && <div>Required total balance: {totalVal}</div>}</div>
      <div>Amount needed to be in bank: {amountNeeded ? amountNeeded : "0"}</div>
    </>
  );
};

export default App;
