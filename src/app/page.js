import { getUser } from "@/actions/auth";
import Image from "next/image";
import LoggedUser from "./loggedUser";
import { getIdUser } from "@/lib/token";
import img from "@/images/banner.png";
import background from "@/images/cityscape22.png";

export default async function Home() {
  const user = await getUser();
  const idUser = await getIdUser();

  if (user) {
    return <LoggedUser user={user} idUser={idUser} />;
  } else {
    return (
      <div className="flex flex-col items-center justify-center p-8  ">
        <h1 className="font-extrabold text-6xl text-raisinblack mt-5">
          <Image src={img} alt="banner" width={600} />
        </h1>
        <h2 className="font-bold text-4xl text-raisinblack mb-10">
          Your <span className="text-goldenrod font-bold">People</span>.Your{" "}
          <span className="text-goldenrod font-bold">Bank</span>.
        </h2>

        <div className="fixed bottom-9 left-0 w-screen h-[40vh] overflow-hidden">
          <Image
            src={background}
            alt="cityscape"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Main content or any additional components can go here */}

        {/* <footer className="flex flex-wrap gap-6 justify-center w-full max-w-3xl mt-10">
          <a
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer> */}
      </div>
    );
  }
}
