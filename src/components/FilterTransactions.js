"use client";

import { useState } from "react";
import TransactionList from "@/components/TransactionList/index";
import Dropdown from "@/app/filtering/Dropdown";
//import moment from "moment/moment";

function FilterTransactions({ transactions, user }) {
  const [filterType, setFilterType] = useState("");
  //   const [fromDate, setFromDate] = useState("");
  //   const [toDate, setToDate] = useState("");

  // This handle is for the other filtering (deposit/withdraw/transfer)
  const handleFilterChange = (selectedFilter) => {
    setFilterType(selectedFilter);
  };

  // Handling the start date
  //   const handleFromDateChange = (event) => {
  //     setFromDate(event.target.value);
  //   };

  //   // Handling the end date
  //   const handleToDateChange = (event) => {
  //     setToDate(event.target.value);
  //   };

  // The filtering function for transactions based on type and date range
  const filterTransactions = () => {
    let filtered = transactions;

    // Filter by type (deposit, withdraw, transfer)
    if (filterType === "deposit") {
      filtered = filtered.filter(
        (transaction) => transaction.type === "deposit"
      );
    } else if (filterType === "withdraw") {
      filtered = filtered.filter(
        (transaction) => transaction.type === "withdraw"
      );
    } else if (filterType === "transfer") {
      filtered = filtered.filter(
        (transaction) => transaction.type === "transfer"
      );
    }

    // The if statements of the filtering data
    // if (filterType === "by Date" && fromDate && toDate) {
    //   const startDate = moment(fromDate);
    //   const endDate = moment(toDate).endOf("day");

    //   filtered = filtered.filter((transaction) => {
    //     const transactionDate = moment(transaction.createdAt);
    //     return transactionDate.isBetween(startDate, endDate, null, "[]");
    //   });
    // }

    return filtered;
  };

  let filteredTransactions = filterTransactions();

  return (
    <div className="flex flex-col items-center justify-center pt-15">
      <Dropdown onChange={handleFilterChange} />
      {/* 
      {filterType === "by Date" && (
        <div className="mt-4 flex space-x-4">
          <input
            type="date"
            value={fromDate}
            onChange={handleFromDateChange}
            className="p-2 border rounded"
            placeholder="From Date"
          />
          <input
            type="date"
            value={toDate}
            onChange={handleToDateChange}
            className="p-2 border rounded"
            placeholder="To Date"
          />
        </div>
      )} */}

      <div className="min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
        <div className="max-w-[90%] w-full px-6 py-8 max-h-[80%]">
          <h2 className="text-center text-3xl text-black font-semibold mb-6">
            Transactions
          </h2>
          <TransactionList transactions={filteredTransactions} user={user} />
        </div>
      </div>
    </div>
  );
}

export default FilterTransactions;

///////////////////////////////////////////////////////////

// "use client";

// import { useState } from "react";
// import TransactionList from "@/components/TransactionList/index";
// import Dropdown from "@/app/filtering/Dropdown";
// import moment from "moment/moment";
// import { DateFilter } from "@/app/filtering/DateFilter";

// function FilterTransactions({ transactions, user }) {
//   const [filterType, setFilterType] = useState("");
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);

//   // This handle is for the other filtering (deposit/withdraw/transfer)
//   const handleFilterChange = (selectedFilter) => {
//     setFilterType(selectedFilter);
//   };

//   // The filtering function for transactions based on type and date range
//   const filterTransactions = () => {
//     let filtered = transactions;

//     // Filter by type (deposit, withdraw, transfer)
//     if (
//       filterType === "deposit" ||
//       filterType === "withdraw" ||
//       filterType === "transfer"
//     ) {
//       filtered = filtered.filter(
//         (transaction) => transaction.type === filterType
//       );
//     }

//     // Filter by date range if "by Date" is selected and both dates are provided
//     if (filterType === "by Date" && fromDate && toDate) {
//       const startDate = moment(fromDate);
//       const endDate = moment(toDate).endOf("day"); // Include the whole end date

//       filtered = filtered.filter((transaction) => {
//         const transactionDate = moment(transaction.createdAt);
//         return transactionDate.isBetween(startDate, endDate, null, "[]");
//       });
//     }

//     return filtered;
//   };

//   let filteredTransactions = filterTransactions();

//   return (
//     <div className="flex flex-col items-center justify-center pt-15">
//       <Dropdown onChange={handleFilterChange} />

//       {filterType === "by Date" && (
//         <div className="mt-4 flex space-x-4">
//           <DateFilter
//             selectedDate={fromDate}
//             onDateChange={setFromDate}
//             placeholder="From Date"
//           />
//           <DateFilter
//             selectedDate={toDate}
//             onDateChange={setToDate}
//             placeholder="To Date"
//           />
//         </div>
//       )}

//       <div className="min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
//         <div className="max-w-[90%] w-full px-6 py-8 max-h-[80%]">
//           <h2 className="text-center text-3xl text-black font-semibold mb-6">
//             Transactions
//           </h2>
//           <TransactionList transactions={filteredTransactions} user={user} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FilterTransactions;

///////////////////////////////////////////////

// "use client";

// import { useState } from "react";
// import TransactionList from "@/components/TransactionList/index";
// import Dropdown from "@/app/filtering/Dropdown";
// import moment from "moment/moment";
// import { DatePickerWithRange } from "@/components/DatePickerWithRange";

// function FilterTransactions({ transactions, user }) {
//   const [filterType, setFilterType] = useState("");
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);

//   // This handle is for the other filtering (deposit/withdraw/transfer)
//   const handleFilterChange = (selectedFilter) => {
//     setFilterType(selectedFilter);
//   };

//   // The filtering function for transactions based on type and date range
//   const filterTransactions = () => {
//     let filtered = transactions;

//     // Filter by type (deposit, withdraw, transfer)
//     if (
//       filterType === "deposit" ||
//       filterType === "withdraw" ||
//       filterType === "transfer"
//     ) {
//       filtered = filtered.filter(
//         (transaction) => transaction.type === filterType
//       );
//     }

//     // Filter by date range if "by Date" is selected and both dates are provided
//     if (filterType === "by Date" && fromDate && toDate) {
//       const startDate = moment(fromDate);
//       const endDate = moment(toDate).endOf("day"); // Include the whole end date

//       filtered = filtered.filter((transaction) => {
//         const transactionDate = moment(transaction.createdAt);
//         return transactionDate.isBetween(startDate, endDate, null, "[]");
//       });
//     }

//     return filtered;
//   };

//   let filteredTransactions = filterTransactions();

//   return (
//     <div className="flex flex-col items-center justify-center pt-15">
//       <Dropdown onChange={handleFilterChange} />

//       {filterType === "by Date" && (
//         <div className="mt-4 flex space-x-4">
//           <DatePickerWithRange
//             date={{ from: fromDate, to: toDate }}
//             setDate={(range) => {
//               setFromDate(range.from);
//               setToDate(range.to);
//             }}
//             placeholder="Pick a date"
//           />
//         </div>
//       )}

//       <div className="min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
//         <div className="max-w-[90%] w-full px-6 py-8 max-h-[80%]">
//           <h2 className="text-center text-3xl text-black font-semibold mb-6">
//             Transactions
//           </h2>
//           <TransactionList transactions={filteredTransactions} user={user} />
//         </div>
//       </div>
//     </div>
//   );
// }

//  export default FilterTransactions;

// "use client";

// import { useState } from "react";
// import TransactionList from "@/components/TransactionList/index";
// import Dropdown from "@/app/filtering/Dropdown";
// import moment from "moment/moment";
// import { DatePickerWithRange } from "@/components/DatePickerWithRange";

// function FilterTransactions({ transactions, user }) {
//   const [filterType, setFilterType] = useState("");
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);

//   const handleFilterChange = (selectedFilter) => {
//     setFilterType(selectedFilter);
//   };

//   const filterTransactions = () => {
//     let filtered = transactions;

//     if (
//       filterType === "deposit" ||
//       filterType === "withdraw" ||
//       filterType === "transfer"
//     ) {
//       filtered = filtered.filter(
//         (transaction) => transaction.type === filterType
//       );
//     }

//     if (filterType === "by Date" && fromDate && toDate) {
//       const startDate = moment(fromDate);
//       const endDate = moment(toDate).endOf("day");

//       filtered = filtered.filter((transaction) => {
//         const transactionDate = moment(transaction.createdAt);
//         return transactionDate.isBetween(startDate, endDate, null, "[]");
//       });
//     }

//     return filtered;
//   };

//   let filteredTransactions = filterTransactions();

//   return (
//     <div className="flex flex-col items-center justify-center pt-15">
//       <Dropdown onChange={handleFilterChange} />

//       {filterType === "by Date" && (
//         <div className="mt-4 flex space-x-4">
//           <DatePickerWithRange
//             date={{ from: fromDate, to: toDate }}
//             setDate={(range) => {
//               setFromDate(range.from);
//               setToDate(range.to);
//             }}
//             placeholder="Pick a date"
//           />
//         </div>
//       )}

//       <div className="min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
//         <div className="max-w-[90%] w-full px-6 py-8 max-h-[80%]">
//           <h2 className="text-center text-3xl text-black font-semibold mb-6">
//             Transactions
//           </h2>
//           <TransactionList transactions={filteredTransactions} user={user} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FilterTransactions;