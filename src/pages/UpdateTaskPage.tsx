/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Label, Spinner, Textarea } from "keep-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useGetSingtaskQuery,
  useUpdateTaskMutation,
} from "../redux/api/taskApi";
import { Params, useParams } from "react-router-dom";

const UpdateTaskPage = () => {
  const [selecttedStatus, setSelectedStatus] = useState("");
  const { id } = useParams<Params<string>>();

  const { data, isLoading } = useGetSingtaskQuery(id);
  const [updateTask] = useUpdateTaskMutation();
  const task = data?.data;

  useEffect(() => {
    setSelectedStatus(task?.status);
  }, [task]);

  const handleTaskSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const updatedTaskData = { title, description, status: selecttedStatus };
    try {
      const res = await updateTask({ id, updatedTaskData }).unwrap();

      if (!res) {
        toast.error("Somthing went Wrong");
      }
      if (res?.success) {
        toast.success(`${res?.message}`);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Spinner color="info" size="lg" />
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="md:m-4 w-full max-w-[800px]">
        <h1 className="mt-40 md:mt-12 mb-4 font-bold text-center text-4xl text-orange-800">
          Update Your Task
        </h1>
        <form onSubmit={handleTaskSubmit}>
          <div>
            <div className="md:flex items-center gap-3 w-full">
              <div className="w-1/2">
                <Label htmlFor="#id-10" value="Title" />
                <Textarea
                  name="title"
                  placeholder="Title"
                  withBg={true}
                  color="gray"
                  border={true}
                  rows={1}
                  required
                  defaultValue={task?.title}
                />
              </div>
              <div className="w-1/2">
                <Label htmlFor="#id-10" value="Status" />
                <select
                  className="w-full p-3 outline outline-gray-300 outline-[2px] rounded-md"
                  id="cars"
                  name="status"
                  form="carform"
                  defaultValue={task?.status}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="pending">pending</option>
                  <option value="complete">complete</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <Label htmlFor="#id-11" value="Description" />
            <Textarea
              id="description"
              placeholder="Write Description"
              withBg={true}
              color="gray"
              border={true}
              rows={5}
              required
              defaultValue={task?.description}
            />
          </div>
          <div className="mt-4">
            <input
              className="cursor-pointer hover:bg-orange-200 bg-orange-300 w-full py-2 rounded-md font-semibold uppercase"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskPage;
