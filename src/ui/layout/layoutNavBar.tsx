import Image from "next/image";

export default function LayoutNavBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray300">
      <div className="bg-blue w-screen flex align-center justify-center">
        <div className="w-4/5 flex align-center justify-between">
          <div>
            <Image src="/icon.png" alt="Logo" width={120} height={120} />
          </div>
          <div className="flex items-center">
            <p className="text-yellow font-bold text-5xl">Obra</p>
            <p className="text-dark-blue font-bold text-5xl">Fácil</p>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto pt-10">
      {children}
      </div>
    </div>
  );
}
