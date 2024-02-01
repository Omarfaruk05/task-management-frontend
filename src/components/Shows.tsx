import { Badge, Button, Card, Rating } from "keep-react";
import { useEffect, useState } from "react";
import { Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import { IShow } from "../interfaces/shows";

const Shows = () => {
  const [shows, setShows] = useState<IShow[]>([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);
  console.log(shows);
  return (
    <div>
      <div className="max-w-7xl mx-auto my-8">
        <Badge
          className="my-4 mx-auto rounded-xs"
          colorType="light"
          color="warning"
        >
          <h2 className="text-3xl font-semibold text-slate-800">Our Shows</h2>
        </Badge>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {shows?.map((show: IShow, index: number) => (
            <div key={index}>
              <Card className="max-w-[180px] md:max-w-[200px] overflow-hidden rounded-md">
                <img
                  src={show?.show?.image?.medium}
                  alt=""
                  className="min-h-72 min-w-48 bg-gray-300 rounded-md"
                />
                <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
                  <Heart size={20} weight="bold" color="white" />
                </Card.Container>
                <Card.Container className="p-2">
                  <Card.Container className="flex  items-center justify-between">
                    <Badge size="xs" colorType="light" color="success">
                      Premiered: {show?.show?.premiered}
                    </Badge>

                    <Rating size={10}>
                      <Rating.Star filledType="fill" color="orange" />
                      <span className="text-sm text-gray-400">
                        ({show?.show?.rating?.average})
                      </span>
                    </Rating>
                  </Card.Container>
                  <h3 className="text-center font-semibold mt-2">
                    {show?.show?.name}
                  </h3>
                  <Card.Container className="flex items-center justify-center mt-3 gap-5">
                    <Link to={`/shows/${show?.show?.id}`} className="w-full">
                      {" "}
                      <Button
                        color={"success"}
                        className="w-full"
                        size={"xs"}
                        type="outlineGray"
                      >
                        See More
                      </Button>
                    </Link>
                  </Card.Container>
                </Card.Container>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shows;
