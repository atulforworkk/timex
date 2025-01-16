import Days from "@/components/days/Days";
import React from "react";

type Props = {};

const ScheduleTable = (props: Props) => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timings = () => {
    const timeSlots = [];
    for (let i = 0; i < 24; i++) {
      const startTime = `${i % 12 || 12} ${i < 12 ? 'A.M.' : 'P.M.'}`;
      const endTime = `${(i + 1) % 12 || 12} ${i + 1 < 12 || i === 23 ? 'A.M.' : 'P.M.'}`;
      timeSlots.push(
        <div key={i} className="-400 px-4 py-2 w-2/12 border">
          {startTime} - {endTime}
        </div>
      );
    }
    return timeSlots;
  };
  return (
    <div className="h-screen">
      {/* header */}
    <Days/>

    </div>
  );
};

export default ScheduleTable;
