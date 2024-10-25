const MoneySendInputHandler = ({ amount, setAmount }) => (
  <>
    <label
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="amount"
    >
      Amount (in Rs)
    </label>
    <input
      type="number"
      className="flex h-10 w-full rounded-lg shadow-md border bg-background px-3 py-2 text-sm"
      id="amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="Enter amount"
    />
  </>
);

export default MoneySendInputHandler;