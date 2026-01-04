// components/Card.js - Separate Card component
export default function Card({ imageSrc, title, category, description, buttonText }) {
  return (
    <div className="flex flex-col bg-red-800 border-2 border-black rounded-3xl overflow-hidden text-white transition-transform duration-300 ease-in-out hover:scale-102 pb-5 lg:flex-row lg:items-center">
      <div className="relative w-full lg:w-2/5">
        <span className="absolute top-4 left-4 bg-white text-black px-4 py-1 rounded-full border-2 border-black z-10 font-bold text-2xl animate-rot">bata</span>
        <img src={imageSrc} alt="" className="w-full h-[250px] object-cover lg:h-[300px]" />
      </div>
      <div className="p-5 flex flex-col gap-3 relative lg:w-3/5">
        <h3 className="text-3xl uppercase font-bold leading-tight lg:text-2xl">{title}</h3>
        <span className="bg-cyan-200 text-black border border-cyan-400 rounded-md px-2 py-1 w-fit text-sm">{category}</span>
        <div className="ddiv"></div>
        <p className="text-lg leading-relaxed text-gray-200">{description}</p>
        <button className="px-3 py-3 mt-4 border-none rounded-lg font-bold cursor-pointer bg-white transition-all duration-300 hover:bg-cyan-300 hover:-translate-y-1 text-black">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
