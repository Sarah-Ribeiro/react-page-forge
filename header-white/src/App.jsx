import logo from "./assets/logo.png";
import { ArrowRight } from "lucide-react";

export function App() {
  return (
    <div className="flex justify-between px-10 py-5 items-center align-middle">
      <img
        src={logo}
        alt="Coloque qualquer logo que quiser!"
        className="h-16 w-28 object-contain"
      />
      <div>
        <ul className="flex gap-10 items-center font-Inter">
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-1 font-Inter border-black border p-2 rounded cursor-pointer align-middle">
        <a href="#">Log in</a>
        <ArrowRight />
      </div>
    </div>
  );
}
