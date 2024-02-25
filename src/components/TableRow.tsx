/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge, Button, Table } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { useDeleteTaskMutation } from "../redux/api/taskApi";
import { toast } from "react-toastify";

const TableRow = ({ task }) => {
  const [deleteTask] = useDeleteTaskMutation();
  const handleDeleteTask = async () => {
    try {
      const res = await deleteTask(task?._id).unwrap();
      console.log(res);

      if (!res) {
        toast.error("Somthing went Wrong");
      }
      console.log(res);
      if (res?.success) {
        toast.success(`${res?.message}`);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <Table.Row className="bg-white">
      <Table.Cell className="min-w-40">
        <h1>{task?.title}</h1>
      </Table.Cell>

      <Table.Cell>
        <p>{task?.description}</p>
      </Table.Cell>
      <Table.Cell>{task?.dueDate.split("T")[0]}</Table.Cell>

      <Table.Cell>
        <Badge colorType="light" color="success" dot={true}>
          {task?.status}
        </Badge>
      </Table.Cell>
      <Table.Cell className="flex items-center gap-2">
        <Button type={"primary"} size={"sm"} color="warning">
          <Pencil />
        </Button>
        <Button type={"primary"} size={"sm"} color="error">
          <Trash onClick={handleDeleteTask} />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
