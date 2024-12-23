import Image from "next/image";

export default function LayoutAuth({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-blue w-screen h-screen flex">
      <div className="flex justify-center items-center w-1/2 p-8">
        <Image src="/ObraFacil.png" alt="Logo" width={600} height={600} />
      </div>
      <div className="bg-grey rounded-tl-[25%] w-1/2 p-8 flex align-center justify-center" >
        <main className="flex justify-center items-center flex-col  w-[500px]">
          <h1 className="text-4xl font-semibold">{title}</h1>
          {children}
        </main>
      </div>
    </div>
  );
  
}
