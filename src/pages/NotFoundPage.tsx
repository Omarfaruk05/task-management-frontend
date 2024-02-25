"use client";
import { Empty } from "keep-react";

export const NotFoundPage = () => {
  return (
    <Empty>
      <Empty.Image>
        <img
          src="https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>This page isn't available right now</Empty.Title>
      <Empty.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry.
      </Empty.Description>
      <Empty.Redirect buttonText="Go to Home" redirectUrl="/" />
    </Empty>
  );
};
