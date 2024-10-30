import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns"; // Import format

export function DatePickerWithRange({
  date,
  setDate,
  placeholder = "Pick a date",
}) {
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
            <CalendarIcon />
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
                from: range.from || null, // Use null if undefined
                to: range.to || null, // Use null if undefined
              });
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
