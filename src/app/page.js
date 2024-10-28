import { getUser } from "@/actions/auth";
import Image from "next/image";

export default async function Home() {
  const user = await getUser();

  console.log(user);

  //change the homePage if user is loged in or not
  //edit the shape of the boxes based on the overall
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-col">
          <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-8  text-sm sm:text-base h-70  p-8 w-70 ">
            <div className="flex gap-4 items-center flex-col">
              <h1 className="font-bold  "> Your Avaliable Balance:</h1>

              {`${user.balance} KWD`}
            </div>
          </a>

          {/* Amount box/submit button  */}
          <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-8  text-sm sm:text-base h-30 p-4 w-[320px] ">
            <div className="flex gap-4 items-center flex-row">
              <h1 className="font-mono  "> Deposit</h1>

              <label className="relative inline-block w-10 h-5">
                <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-500 transition-colors duration-300 peer-checked:bg-gray-200 peer-focus:ring-2 peer-focus:ring-gray-200 rounded-full"></span>
                <span className="absolute left-0.5 bottom-0.5 h-4 w-4 bg-white transition-transform duration-300 transform peer-checked:translate-x-5 rounded-full"></span>
              </label>

              <h1 className="font-mono  "> withdraw</h1>
            </div>
            
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
      </footer>
    </div>
  );
}
