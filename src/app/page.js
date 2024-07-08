
import { IoIosArrowBack } from "react-icons/io";

export default function Home() {
  return (
    <div className="w-full relative flex items-center justify-center">
      <div className="flex flex-col">
        <div className="text-center">
          <div className="flex flex-col space-y-7">
            <p className="mt-4 text-pink-500 font-bold">WHY CHOOSE US</p>
            <h1 className="text-3xl font-black">We Different From Others</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nam ea
              quam neque fugiat <br />
              quia at maxime iusto ipsum numquam quas.
            </p>
          </div>
        </div>
        <div className="flex w-full mt-7 gap-7">
          <div className="flex w-full -space-x-14">
            <div className="flex rounded-full bg-pink-700 mix-blend-multiply h-[450px] w-[450px]">
              <div className="flex items-center justify-center w-full flex-col gap-6">
                <h1 className="text-white text-2xl t">Industry Experts</h1>
                <p className="text-white text-center p-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae, veritatis animi autem reiciendis itaque et quisquam
                  aspernatur est quae dolore?
                </p>
              </div>
            </div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661682621668-c126c4a060b1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-full mix-blend-multiply"
              height={450}
              width={450}
            />
          </div>
          <div className="flex flex-col space-y-6 items-center justify-center">
            <div className="w-full flex bg-gray-300 h-10 rounded-l-full items-center p-3 hover:bg-pink-500">
              <IoIosArrowBack />
              <p className="w-64 text-end px-4 items-center">
                Industry Experts
              </p>
            </div>
            <div className="w-full flex bg-gray-300 h-10 rounded-l-full items-center p-3 hover:bg-pink-500">
              <IoIosArrowBack />
              <p className="w-64 text-end px-4 items-center">Dedicated Team</p>
            </div>
            <div className="w-full flex bg-gray-300 h-10 rounded-l-full items-center p-3 hover:bg-pink-500">
              <IoIosArrowBack />
              <p className="w-64 text-end px-4 items-center">Outcome Focused</p>
            </div>
            <div className="w-full flex bg-gray-300 h-10 rounded-l-full items-center p-3 hover:bg-pink-500">
              <IoIosArrowBack />
              <p className="w-64 text-end px-4 items-center">
                High Quality Service
              </p>
            </div>
            <div className="w-full flex bg-gray-300 h-10 rounded-l-full items-center p-3 hover:bg-pink-500">
              <IoIosArrowBack />
              <p className="w-64 text-end px-4 items-center">
                Cyber Security Expert
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}