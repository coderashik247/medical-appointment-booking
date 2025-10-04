import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
    <div
      className="w-11/12 mx-auto border-white border-3 rounded-xl"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,1) 100%)",
      }}
    >
      <Banner></Banner>
    </div>
  );
};

export default Home;
