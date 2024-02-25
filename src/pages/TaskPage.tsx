import { Badge, Button, Table, TextInput } from "keep-react";
import { MagnifyingGlass, Trash, Pencil } from "phosphor-react";

const TaskPage = () => {
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
                100
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
          <Table.Row className="bg-white">
            <Table.Cell>
              <h1>Omar Faruk</h1>
            </Table.Cell>

            <Table.Cell>
              <p>UI/UX Designer</p>
            </Table.Cell>
            <Table.Cell>nevaeh.simmons@example.com</Table.Cell>

            <Table.Cell>
              <Badge colorType="light" color="success" dot={true}>
                Active
              </Badge>
            </Table.Cell>
            <Table.Cell className="flex items-center gap-2">
              <Button type={"primary"} size={"sm"} color="warning">
                <Pencil />
              </Button>
              <Button type={"primary"} size={"sm"} color="error">
                <Trash />
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default TaskPage;
