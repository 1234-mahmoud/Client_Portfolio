import Image from "next/image";

const cert = ["cer.webp", "cer.webp", "cer.webp", "cer.webp"];
export default function Certificates() {
  return (
    <div
      className={`w-full border my-4 rounded-lg p-[var(--main-padding)]
    `}
    >
      <h1 className='title'>Certificates</h1>
      <div
        className={`
    flex flex-wrap justify-center items-center gap-5
    `}
      >
        {cert.map((c, idx) => (
          <div
            className={`img w-full h-[250px] md:w-[300px] md:h-[250px] lg:w-[450px] lg:h-[350px]
                       relative overflow-hidden 
                        border  bg-center shrink-0 `}
                        key={idx}
          >
            <Image src={`/${c}`} alt="my pic" fill  />
          </div>
        ))}
      </div>
    </div>
  );
}
