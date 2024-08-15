import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { Task } from "../types";

interface Props {
  task: Task;
}

function TaskCard(props: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const { task } = props;
  return (
    <div
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:right-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative"
    >
      {task.content}
      {mouseIsOver && (
        <button className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded">
          <TrashIcon />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
