import { Badge, Button, Spinner, Table, TextInput } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";
import { useGetTasksQuery } from "../redux/api/taskApi";
import TableRow from "../components/TableRow";
import { useState } from "react";

const TaskPage = () => {
  const { data, isLoading } = useGetTasksQuery(undefined);

  const tasks = data?.data;

  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Spinner color="info" size="lg" />
      </div>
    );
  }
  return (
    <div>
      <Table
        showBorder={true}
        showBorderPosition="right"
        striped={true}
        hoverable={true}
      >
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Tasks</p>
              <Badge size="xs" colorType="light" color="gray">
                {tasks?.length}
              </Badge>
            </div>
            <div className="flex items-center gap-5">
              <TextInput
                id="#id-10"
                placeholder="Search"
                color="gray"
                sizing="md"
                type="text"
                addon={<MagnifyingGlass size={20} color="#5E718D" />}
                addonPosition="left"
              />
            </div>
            <div>
              <Link to={"/task/create"}>
                <Button type="dashed" size={"sm"} color={"success"}>
                  Create Task
                </Button>
              </Link>
            </div>
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[10px]">
            <p className="text-body-6 font-medium text-metal-400">Title</p>
          </Table.HeadCell>
          <Table.HeadCell className="">Description</Table.HeadCell>
          <Table.HeadCell className="">Due Date</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {tasks?.map((task, index: number) => (
            <TableRow task={task} key={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TaskPage;
