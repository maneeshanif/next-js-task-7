import Link from "next/link";
// import Scene from "../Canvas/Scene";   //thats hurt man

const Home = () => {
  return (
    <section className=" h-screen w-full flex justify-around flex-col items-center py-10 bg-primary">
      <h1 className="text-myorange font-bold text-3xl uppercase stroke-myorange stroke-2 text-center md:text-4xl bg-secondary p-2 rounded-md">
        Server side fetching vs Client side fetching 😊
      </h1>
      {/* <Scene /> i am not able to add canvas here after working on this almost 2 days 🥲 */}

      <div className="h-48 w-[360px] md:w-[500px] flex justify-evenly  border-myorange border-2 items-center flex-col bg-white rounded-md">
        <div className="flex justify-center items-center p-4 gap-4">
          <Link
            className="px-12 py-5 rounded bg-black text-white hover:bg-myorange hover:text-balck"
            href={"/serverfetch"}
          >
            Server
          </Link>
          <Link
            className="px-12 py-5 rounded bg-black text-white  hover:bg-myorange hover:text-balck"
            href={"/clientfetch"}
          >
            Client
          </Link>
        </div>
        <p className="text-myorange">
          <span className="text-gray-400">Made By:</span>M.Anees
        </p>
      </div>
    </section>
  );
};

export default Home;
