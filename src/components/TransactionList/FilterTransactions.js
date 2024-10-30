import { useState } from "react";
import Dropdown from "@/app/filtering/Dropdown";
import moment from "moment";
import TransactionCard from "@/components/TransactionList/TransactionCard";
import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button"; // Adjust import if necessary
import { Calendar } from "@/components/ui/calendar"; // Adjust import if necessary
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; // Adjust import if necessary
import { format } from "date-fns";

function FilterTransactions({ transactions, user }) {
  const [filterType, setFilterType] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFilterChange = (selectedFilter) => setFilterType(selectedFilter);

  const filterTransactions = () => {
    let filtered = transactions;

    if (["deposit", "withdraw", "transfer"].includes(filterType)) {
      filtered = filtered.filter(
        (transaction) => transaction.type === filterType
      );
    }

    if (filterType === "by Date" && fromDate && toDate) {
      const startDate = moment(fromDate);
      const endDate = moment(toDate).endOf("day");

      filtered = filtered.filter((transaction) => {
        const transactionDate = moment(transaction.createdAt);
        return transactionDate.isBetween(startDate, endDate, null, "[]");
      });
    }

    return filtered;
  };

  const filteredTransactionsList = filterTransactions();

  return (
    <div className="flex flex-col items-center justify-center pt-15">
      <Dropdown onChange={handleFilterChange} />

      {filterType === "by Date" && (
        <div className="mt-4 flex space-x-4">
          <DatePickerWithRange
            date={{ from: fromDate || null, to: toDate || null }}
            setDate={(range) => {
              setFromDate(range.from || null);
              setToDate(range.to || null);
            }}
            placeholder="Pick a date"
          />
        </div>
      )}

      <div className="min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
        <div className="max-w-[90%] w-full px-6 py-8 max-h-[80%]">
          <h2 className="text-center text-3xl text-black font-semibold mb-6">
            Transactions
          </h2>
          <div className="flex flex-col flex-grow w-full overflow-auto border border-gray-200 rounded-lg p-4">
            {filteredTransactionsList.length > 0 ? (
              filteredTransactionsList.map((transaction, index) => (
                <TransactionCard
                  key={`${transaction._id}-${index}`}
                  transaction={transaction}
                  user={user}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No transactions found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline DatePickerWithRange component
function DatePickerWithRange({ date, setDate, placeholder = "Pick a date" }) {
  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={`w-[300px] justify-start text-left font-normal ${
              !date.from && "text-muted-foreground"
            }`}
          >
            <CalendarIcon className="mr-2" />
            {date?.from
              ? date.to
                ? `${format(new Date(date.from), "LLL dd, y")} - ${format(
                    new Date(date.to),
                    "LLL dd, y"
                  )}`
                : format(new Date(date.from), "LLL dd, y")
              : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(range) => {
              // Ensure range has both from and to defined
              setDate({
                from: range.from || null,
                to: range.to || null,
              });
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default FilterTransactions;
