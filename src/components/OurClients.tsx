import { InfiniteMovingLogos } from "./ui/infinite-moving-logos";
import logo1 from '../assets/Frame.png';
import logo2 from '../assets/Frame (1).svg';
import logo3 from '../assets/logo-70.svg';
import logo4 from '../assets/logo-85.svg';
import logo5 from '../assets/logo-87.svg';
import logo6 from '../assets/logo.svg';

const ClientsLogo = [
  { avatar: logo1, name: "Martin Escobar" },
  { avatar: logo2, name: "Angela Stian" },
  { avatar: logo3, name: "Karim Ahmed" },
  { avatar: logo4, name: "Martin Escobar1" },
  { avatar: logo5, name: "Angela Stian2" },
  { avatar: logo6, name: "Karim Ahmed3" },
];

function OurClients() {
  return (
    <div className="max-w-5xl mx-auto">
    <div className="h-auto w-full relative flex flex-col items-center overflow-hidden">
      <h2 className="text-xl font-medium text-center mb-4">Our Clients</h2>
      <div className="h-[18rem] flex justify-center w-full px-4 mt-5">
        <div className="w-full max-w-6xl">
          <InfiniteMovingLogos items={ClientsLogo} direction="right" speed="normal" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default OurClients;
