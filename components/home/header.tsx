import Image from "next/image";
import profile from "../../public/static/projects/profilepics.png"
export default function Header() {
	return (
    <header className="h-screen flex flex-col items-center justify-center text-center px-4">
	  <Image className=" mt-auto w-64 rounded-full" src={profile} alt=""/>
      <h1 className="text-5xl  text-muted-foreground shadow-inner">
        Okafor James
      </h1>
      <p>
        I&apos;m a software developer dedicated to creating{" "}
        <span className="text-primary font-bold">interactive</span>,{" "}
        <span className="text-primary font-bold">accessible</span>, and{" "}
        <span className="text-primary font-bold">responsive</span> websites.
      </p>
      <p className="mt-auto mb-8">Scroll down</p>
    </header>
  );
}

