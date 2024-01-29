import logo from "./image/logo.png";
import { ArrowRight } from 'lucide-react'

export function App() {
  return (
    <div className="flex justify-between px-10 py-5 items-center">
      <img src={logo} alt="Coloque qualquer logo que quiser!" className="h-12 w-12" />
      <div>
        <ul className="flex gap-10 items-center">
          <li>Product</li>
          <li>Features</li>
          <li>Marketplace</li>
          <li>Company</li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <a href="#">Log in</a>
        <ArrowRight />
      </div>
    </div>
  );
}
