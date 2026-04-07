export const Headings: React.FC<{
  intro: string;
  heading: string;
  subtext: string;
}> = ({ intro, heading, subtext }) => {
  return (
    <div className=" flex items-center flex-col gap-3 md:px-24">
      <p className="text-green-500 ">{intro}</p>
      <p className=" text-4xl md:text-5xl font-bold text-blue-900 text-center">
        {heading}
      </p>
      <div className=" lg:px-28">
        <p className=" text-lg md:text-xl text-center">{subtext}</p>
      </div>
    </div>
  );
};
