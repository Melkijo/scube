import logos from "./assets/logos.png";
import maintenance from "./assets/maintenance.png";
import linkedin from "./assets/linkedin-icon.png";
import instagam from "./assets/instagram-icon.png";
function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-10 p-10">
        <img src={logos} alt="" className="w-[50%] md:w-[12%]" />
        <img src={maintenance} alt="" className="w-full  md:w-[35%] " />
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className=" font-bold text-[1.5rem] md:text-[2.5rem] text-center">
          Website is under construction 🙏
        </h1>
        <p className="text-[1rem] md:text-[1.2rem] font-light leading-none text-center">
          For more information :
        </p>
        <div className="flex justify-center items-centers gap-0 md:gap-3 mb-5">
          <a
            href="https://www.linkedin.com/company/unram-scube-center/"
            target="_blink"
          >
            <img src={linkedin} alt="" className="w-[50%] md:w-[75%]" />
          </a>
          <a href="https://www.instagram.com/scubecenter/" target="_blink">
            <img src={instagam} alt="" className="w-[50%] md:w-[75%]" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
