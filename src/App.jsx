import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative items-center overflow-hidden ">
      <h1 className="bg-white  w-11/12 mx-auto text-center rounded-lg mt-[40px] ml=[25px] px-10 py-2 text-3xl font-bold ">Random gif</h1>
      <div className="flex flex-col ">
        <Random/>
        <Tag/>
      </div>
     

    </div>
  );
}
