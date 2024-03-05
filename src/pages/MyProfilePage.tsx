import { Avatar, Badge } from "keep-react";
import { useGetMyProfileQuery } from "../redux/api/userApi";

const MyProfilePage = () => {
  const { data } = useGetMyProfileQuery(undefined);
  const user = data?.data;
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white mt-12 w-fit p-12 rounded-md shadow-sm text-center">
        <Avatar className="mb-4 mx-auto" shape="circle" size={"xl"} />
        <h4 className="text-2xl font-semibold text-green-800">{user?.name}</h4>
        <Badge className="px-2" size="2xl" colorType="light" color="warning">
          Email: {user?.email}
        </Badge>
      </div>
    </div>
  );
};

export default MyProfilePage;
