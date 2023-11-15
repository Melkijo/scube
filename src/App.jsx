import logos from "./assets/logos.png";
import maintenance from "./assets/maintenance.png";
import linkedin from "./assets/linkedin-icon.png";
import instagam from "./assets/instagram-icon.png";
function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-10 p-10">
        <img src={logos} alt="" className="w-[35%] md:w-auto" />
        <img src={maintenance} alt="" />
        <h1 className=" font-bold text-[2rem] md:text-[4rem] text-center">
          Website is under construction!
        </h1>
        <p className="text-[1rem] md:text-[2rem] font-light ">
          For more information :
        </p>
        <div className="flex justify-center items-centers gap-7">
          <a
            href="https://www.linkedin.com/company/unram-scube-center/"
            target="_blink"
          >
            <img src={linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/scubecenter/" target="_blink">
            <img src={instagam} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
