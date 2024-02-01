import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITVShow } from "../interfaces/shows";
import { Badge, Button } from "keep-react";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";
import BookingModal from "../components/Modals/BookingModal";

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState<ITVShow>();
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setShowDetails(data));
  }, [id]);
  console.log(showDetails);

  return (
    <div className="min-h-[77vh]">
      <div className="max-w-7xl mx-auto my-4 px-4">
        <h2 className="text-5xl mb-8 text-center">{showDetails?.name}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-2 grid grid-cols-3 gap-3">
            <div>
              <img
                className="w-full h-full"
                src={showDetails?.image?.medium}
                alt=""
              />
            </div>
            <div className="col-span-2 relative">
              <div
                className="lg:text-lg"
                dangerouslySetInnerHTML={{
                  __html: showDetails?.summary || "",
                }}
              />
              <div className=" md:block lg:absolute bottom-0 w-full">
                <div className="flex justify-between items-center gap-4">
                  <Button
                    onClick={handleModal}
                    size={"xs"}
                    type={"outlinePrimary"}
                  >
                    Book Ticket
                  </Button>
                  <BookingModal
                    id={id}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    handleModal={handleModal}
                  />
                  <div>
                    <p className="text-sm text-end">Share this on:</p>
                    <div className="flex">
                      <FacebookLogo className="text-2xl text-blue-600" />
                      <TwitterLogo className="text-2xl text-blue-400" />
                      <InstagramLogo className="text-2xl text-red-500" />
                      <YoutubeLogo className="text-2xl text-red-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 col-span-2 md:col-span-1 rounded-md shadow-md p-4">
            <h3 className="text-4xl mb-3">Show Info</h3>

            <div>
              <p>
                <span className="font-semibold">Network:</span>{" "}
                <span>{showDetails?.network?.country?.name}</span>
              </p>
              <p>
                <span className="font-semibold">Schedule:</span>{" "}
                {showDetails?.schedule?.days?.map((day: string) => (
                  <span>{day}</span>
                ))}{" "}
                at{" "}
                <span>
                  {showDetails?.schedule?.time} {""} ({showDetails?.runtime})
                </span>
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span>{showDetails?.status}</span>
              </p>
              <p>
                <span className="font-semibold">Show Type:</span>{" "}
                <span>{showDetails?.type}</span>
              </p>
              <p>
                <span className="font-semibold">Genres:</span>{" "}
                {showDetails?.genres?.map((genre) => (
                  <span>{genre}, </span>
                ))}
              </p>

              <p>
                <span className="font-semibold">Average Run Time:</span>{" "}
                <span>{showDetails?.averageRuntime}</span>
              </p>
              <p>
                <span className="font-semibold">Language:</span>{" "}
                <span>{showDetails?.language}</span>
              </p>
              <p className="flex gap-2 mb-1">
                <span className="font-semibold">Premiered:</span>{" "}
                <Badge colorType="light" color={"info"}>
                  {showDetails?.premiered}
                </Badge>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">Ended:</span>{" "}
                <Badge colorType="light" color={"warning"}>
                  {showDetails?.ended}
                </Badge>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
