import Image from "next/image";
import SignIn from "./AppComponents/signin/SignIn";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen poppins">
      <SignIn />
    </div>
  );
}
