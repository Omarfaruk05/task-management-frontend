import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="max-w-7xl mx-auto my-5 px-2 flex justify-between">
        <div>
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl font-semibold">Follow us on:</h2>
            <div className="flex mt-2">
              <FacebookLogo className="text-2xl text-blue-600" />
              <TwitterLogo className="text-2xl text-blue-400" />
              <InstagramLogo className="text-2xl text-red-500" />
              <YoutubeLogo className="text-2xl text-red-500" />
            </div>
          </div>
          <p className="text-xl">© cinema.com</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-4 text-green-700">
            <p className="text-xl hover:underline">Features</p>
            <p className="text-xl hover:underline">API</p>
            <p className="text-xl hover:underline">Blog</p>
            <p className="text-xl hover:underline">Request a Show</p>
            <p className="text-xl hover:underline">Data Policies</p>
          </div>
          <div className="flex flex-wrap gap-4 text-green-700 justify-end">
            <p className="text-md hover:underline">Features</p>
            <p className="text-md hover:underline">API</p>
            <p className="text-md hover:underline">Blog</p>
            <p className="text-md hover:underline">Request a Show</p>
            <p className="text-md hover:underline">Data Policies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
