import React from "react";
import Monday from "@/composites/taskDayWise/monday/Monday";
import Tuesday from "@/composites/taskDayWise/tuesday/Tuesday";
import Wednesday from "@/composites/taskDayWise/wednesday/Wednesday";
import Thursday from "@/composites/taskDayWise/thursday/Thursday";
import Friday from "@/composites/taskDayWise/friday/Friday";
import Saturday from "@/composites/taskDayWise/saturday/Saturday";
import Sunday from "@/composites/taskDayWise/sunday/Sunday";

const Days = () => {
  return (
    <div className="flex gap-4 items-center  mx-auto font-semibold p-2 m-1  ">
      <Monday />
      <Tuesday />
      <Wednesday />
      <Thursday />
      <Friday />
      <Saturday />
      <Sunday />
    </div>
  );
};

export default Days;
