import Spinner from "./components/elements/Spinner";

export default function Loading() {
  return (
    <div className="absolute inset-0 w-full h-full z-50 opacity-50 bg-black text-white">
      <div className="flex justify-center w-full h-full items-center">
        <Spinner />
        <h1 className="text-xl"> Loading...</h1>
      </div>
    </div>
  );
}
