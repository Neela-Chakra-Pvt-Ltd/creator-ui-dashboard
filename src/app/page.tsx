import Image from "next/image";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex grow min-h-screen justify-center flex-row p-6">
      <div className="flex flex-col gap-6 rounded-lg bg-blue-50 px-6 py-10 md:w-2/5 md:px-20">
        {/* <div
          className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
        /> */}
        <div className="flex flex-row">
        <Image src="/namaskar.png"
            width={70}
            height={80}
            alt="Welcome icon" />
        <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
          <strong>Welcome to PowerChat.</strong>
        </p>
        </div>
        
        <Link
          href="/login"
          className="flex items-center gap-5 self-start rounded-full w-11/12 bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:text-white hover:bg-blue-800 md:text-base"
        >
          <Image src="/googleIcon.svg"
            width={35}
            height={35}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version" />
          <span>Continue with Google</span>
        </Link>
      </div>
    </main>
  );
}
