import Image from "next/image";

function Loading() {
  return (
    <div className="m-4 w-48 relative h-full">
      <Image
        src="/pokemon.png"
        alt="Picture of Pokemon"
        priority
        fill
        sizes=""
        style={{ objectFit: "contain" }}
        className="transition-opacity opacity-0 duration-[2s]"
        onLoad={(event: React.SyntheticEvent<HTMLImageElement, Event>) =>
          event.currentTarget.classList.remove("opacity-0")
        }
      />
    </div>
  );
}

export default Loading;
