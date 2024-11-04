"use client"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className=" h-[64px] bg-[#A29875] w-full">
        <div className=" ml-[36px]">
          <h1 className="sm:text-[44px] text-[35px] text-white font-mono">MANZZARI</h1>
        </div>
      </nav>
      <div className="grid md:grid-cols-2">
        <div className="h-[89px] md:mt-[136px] mt-[36px] md:ml-[176px] ml-[46px]">
          <p className="font-bold text-[40px] text-[#504933] ">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </p>
          <Image src={"/Images/sms.png"} alt="Sms" height={147} width={902} />
          <Image
            src={"/Images/Frame 11.png"}
            alt="Sms"
            height={58}
            width={288}
            className="mt-[10px] md:w-[200px] w-[150px]"
          />
        </div>
        <div>
          <Image
            src={"/Images/profile.png"}
            alt="Sms"
            height={147}
            width={292}
            className="mt-[268px] md:mt-[68px] md:ml-32 ml-10"
          />
        </div>
      </div>
      <h1 className="md:text-[75px] text-[30px] text-center font-bold text-[#504933] md:mt-36 mt-10">
        Shop By Categories
      </h1>
      <br />
      <br />
      <br />
      <Image
        src={"/Images/Frame 1.png"}
        alt="Sms"
        height={75}
        width={929}
        className="lg:ml-52 p-4"
      />
      <div className="grid sm:grid-cols-8  gap-4 m-4">
        <div className="md:col-span-4">
          <Image
            src={"/Images/Group 14230.png"}
            alt="Sms"
            height={582}
            width={893}
            className="mt-[60px]"
          />
        </div>
        <div className="sm:col-span-2">
          <Image
            src={"/Images/Component 1.png"}
            alt="Sms"
            height={581}
            width={893}
            className=""
          />
        </div>
        <div className="sm:col-span-2">
          <Image
            src={"/Images/Component 10.png"}
            alt="Sms"
            height={581}
            width={893}
            className="mt-[13px]"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-8 gap-4 m-4">
        <div className="md:col-span-2">
          <Image
            src={"/Images/Component 1.png"}
            alt="Sms"
            height={479}
            width={375}
            className=""
          />
        </div>
        <div className="md:col-span-2">
          <Image
            src={"/Images/Component 9.png"}
            alt="Sms"
            height={581}
            width={893}
            className="mt-3"
          />
        </div>
        <div className="md:col-span-4">
          <Image
            src={"/Images/banner-17.jpg.png"}
            alt="Sms"
            height={581}
            width={893}
            className="mt-[60px]"
          />
        </div>
      </div>
      <div>
        <Image
          src={"/Images/Section1.png"}
          alt="Sms"
          height={300}
          width={1920}
          className=""
        />
      </div>
      <div className="text-center">
        <h1 className="md:text-[65px] text-[30px] mt-5 mb-5 font-bold text-[#504933]">
          Trendy Collection
        </h1>
      </div>
      <div className="grid sm:grid-cols-4 ml-10 p-4 ">
        <div className="w-[300px]">
          <Image
            src={"/Images/Component 17.png"}
            alt="Sms"
            height={479}
            width={300}
            className=""
          />
          <p className="text-4xl font-medium md:text-right text-center text-[#938965]">
            Cable Chain Chokar ₹20,000
          </p>
        </div>
        <div className="w-[300px]">
          <Image
            src={"/Images/Component 23.png"}
            alt="Sms"
            height={479}
            width={300}
            className=""
          />
          <p className="text-4xl font-medium md:text-right text-center text-[#938965]">
            Link Chain Earing ₹20,000
          </p>
        </div>
        <div className="w-[300px]">
          <Image
            src={"/Images/Component 21.png"}
            alt="Sms"
            height={479}
            width={300}
            className=""
          />
          <p className="text-4xl font-medium md:text-right text-center text-[#938965]">
            Yona Signet Ring ₹20,000
          </p>
        </div>
        <div className="w-[300px]">
          <Image
            src={"/Images/Component 22.png"}
            alt="Sms"
            height={479}
            width={300}
            className=""
          />
          <p className="text-4xl font-medium md:text-right text-center text-[#938965]">
            Anna Ribbed Bangle ₹20,000
          </p>
        </div>
      </div>
      <div className="mt-24 m-5 bg-[#A29875]">
        <Image
          src={"/Images/Section2.png"}
          alt="Sms"
          height={300}
          width={1920}
          className=""
        />
      </div>
      <div className="text-center md:mt-24 mt-5">
        <h1 className="md:text-[65px] text-[30px] font-bold text-[#504933]">Spotted on</h1>
      </div>

      <div className="md:m-20 m-5">
        <Image
          src={"/Images/Frame 3.png"}
          alt="Sms"
          height={300}
          width={1920}
          className=""
        />
      </div>

      <div className="md:m-20 m-5">
        <Image
          src={"/Images/test-3-1.jpg.png"}
          alt="Sms"
          height={90}
          width={90}
          className="md:ml-[550px] ml-[157px] "
        />
        <p className="md:ml-[540px] ml-[150px] text-3xl">EDISON</p>
        <p className="md:ml-[560px] ml-[169px]">Designer</p>
        <Image
          src={"/Images/Frame 18.png"}
          alt="Sms"
          height={300}
          width={1920}
          className=""
        />
      </div>
      <div className="bg-[#A29875] h-[522px] grid md:grid-cols-2">
        <Image
          src={"/Images/image 1.png"}
          alt="Sms"
          height={300}
          width={892}
          className="p-4 sm:p-0 sm:m-6 "
        />
        <div className="text-center m-4 md:mt-52">
          <h1 className="text-[50px] font-semibold text-white">ABOUT US</h1>
          <p className=" font-medium text-white ">
            At Purity, we strive to deliver excellence, consistently. We,ve
            brought to the market a whole new standard of business ethics and
            product reliability.
          </p>
          <Image
            src={"/Images/Frame 12.png"}
            alt="Sms"
            height={39}
            width={192}
            className="m-4 md:ml-64 ml-[127px] mb-5 w-[130px] md:w-[192px]"
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className="md:text-[75px] text-[30px] text-[#504933] font-medium m-4 mb-10">
          Purity on Instagram
        </h1>
      </div>
      <div>
        <Image
          src={"/Images/Frame 10.png"}
          alt="Sms"
          height={250}
          width={1622}
          className="sm:p-5 p-6"
        />
      </div>
      <div className="text-center">
        <h1 className="md:text-[75px] text-[30px]  text-[#504933] font-medium m-4">Newsletter</h1>
      </div>
      <div className="text-center">
        <h1 className="text-[20px] font-medium m-10 text-[#A29875]">
          Sign-up to receive 10% off your next purchase. Plus hear about new
          <br /> arrivals and offers.
        </h1>
      </div>
      <div className="grid sm:grid-cols-2">
       <div>
       <Image
          src={"/Images/Frame 13.png"}
          alt="Sms"
          height={57}
          width={417}
          className="m-4 sm:ml-[430px] ml-20  w-[250]  sm:w-[317]"
        />
       </div>
       <div>
       <Image
          src={"/Images/Frame 14.png"}
          alt="Sms"
          height={57}
          width={147}
          className="m-4 w-[90] sm:w-[107px] sm:ml-20 ml-40"
        />
       </div>
      </div>
      <div className="bg-[#A29875] md:h-[303px] mt-5">
        <Image
          src={"/Images/Frame 27.png"}
          alt="Sms"
          height={203}
          width={1214}
          className="md:m-4 p-12 md:ml-16"
        />
      </div>
      <div className="md:h-[54px] h-[30px] bg-[#504933]"></div>
    </>
  );
}
