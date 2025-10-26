import Image from "next/image";
export default function About() {
  return (
    <div
      className={`w-full border my-4 rounded-lg p-[var(--main-padding)]
      
    `}
    >
      <div
        className={`
    flex flex-col md:flex-row items-center gap-10
    `}
      >
        <div
          className={`img w-[150px] h-[150px] md:w-[200px] md:h-[200px] relative overflow-hidden 
             rounded-full bg-center shrink-0`}
        >
          <Image
            src="/user.webp"
            alt="my pic"
            fill
            sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 200px"
            className="object-cover"
          />
        </div>
        <div className="summry">
          <h1 className="font-bold text-2xl">I'm username <span className="text-[#feb429]">Filed</span> </h1>
          <p className="w-full lg:w-[600px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est id
            blanditiis excepturi ipsa architecto natus labore alias rerum.
            Consequuntur autem quasi libero debitis quo dolore sit est repellat
            mollitia quibusdam.
          </p>
        </div>
      </div>
      <div
        className={`contact flex justify-center items-center gap-2 flex-wrap`}
      >
        <a href="#">
          <Image
            src={"/whatsapp.svg"}
            alt={"whatsapp icon"}
            width={30}
            height={30}
          />
        </a>
        <a href="#">
          <Image
            src={"/linkedin.svg"}
            alt={"linkedin icon"}
            width={30}
            height={30}
          />
        </a>
        <a href="#">
          <Image
            src={"/facebook.svg"}
            alt={"facebook icon"}
            width={30}
            height={30}
          />
        </a>
        <a href="#">
          <Image
            src={"/github.svg"}
            alt={"githubl icon"}
            width={30}
            height={30}
          />
        </a>
        <a href="#">
          <Image src={"/mail.svg"} alt={"mail icon"} width={30} height={30} />
        </a>
      </div>
    </div>
  );
}
