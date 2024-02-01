import banner from "../assets/heroBg.jpg";

const Banner = () => {
  return (
    <div
      className="text-center text-white flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${banner})`,
        height: "60vh",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-3">
        Unlimited movies, TV shows, and more
      </h1>
      <p className="mb-8">Watch anywhere. Cancel anytime.</p>
      <p className="font-semibold text-xl">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className="mt-12 flex flex-wrap gap-4 font-semibold text-xl">
        <input
          type="text"
          className="bg-[#25456a8a]/50 backdrop-blur-sm border-[1px] border-gray-400 w-80 h-12 px-3 rounded-sm"
          placeholder="Email address"
        />
        <input
          type="submit"
          value="Get Started"
          className="px-10 bg-red-600 rounded-sm"
        />{" "}
      </form>
    </div>
  );
};

export default Banner;
