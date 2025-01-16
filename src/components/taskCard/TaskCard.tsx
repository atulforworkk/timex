import React from "react";

type Props = {
  taskTime: string;
  TaskName: string;
};

const TaskCard = ({ taskTime, TaskName }: Props) => {
  return (
    <div className="border rounded-lg text-center m-2 ">
      {taskTime}
      <br />
      {TaskName}
    </div>
  );
};

export default TaskCard;
