/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Label, TextInput, Textarea } from "keep-react";
import { useEffect, useState } from "react";
import { DatePicker } from "keep-react";
import { toast } from "react-toastify";
import { useCreateTaskMutation } from "../redux/api/taskApi";
import { getUserInfo } from "../services/auth.service";

const CreateTaskPage = () => {
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const { _id }: any = getUserInfo();

  const [createTitle] = useCreateTaskMutation();

  useEffect(() => {
    const defaultDate = new Date();
    console.log(defaultDate);
    setDueDate(defaultDate);
  }, []);

  const handleTaskSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const taskData = { title, description, dueDate, user: _id };
    console.log(taskData);
    try {
      const res = await createTitle(taskData).unwrap();
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
    <div className="flex justify-center">
      <div className="md:m-4 w-full max-w-[800px]">
        <h1 className="mt-40 md:mt-12 mb-4 font-bold text-center text-4xl text-green-800">
          Create Your Task
        </h1>
        <form onSubmit={handleTaskSubmit}>
          <div>
            <div className="md:flex items-center gap-3 w-full">
              <div className="w-1/2">
                <Label htmlFor="#id-10" value="Title" />
                <TextInput
                  name="title"
                  placeholder="Title"
                  color="gray"
                  sizing="md"
                  type="text"
                  required
                />
              </div>
              <div className="w-1/2">
                <Label htmlFor="#id-10" value="Due Date" />
                <DatePicker
                  singleDate={setDueDate}
                  placeholder="Date / Month / Year"
                >
                  <DatePicker.SingleDate />
                </DatePicker>
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
            />
          </div>
          <div className="mt-4">
            <input
              className="bg-green-300 w-full py-2 rounded-md font-semibold uppercase"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskPage;
