import Link from "next/link";

interface StartButtonProps {
  path: string;
}

export const StartButton = ({ path }: StartButtonProps) => {
  return (
    <Link href={path}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Start
      </button>
    </Link>
  );
};