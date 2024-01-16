import{Logo} from "./icons/Logo"
import{Menu} from "./icons/menu"
import { Sun} from "./icons/sun"
export function Header(){
    return (
    <div className="flex , justify-between p-4">
       <Logo/>
     <div className="hidden gap-2 md:flex">
     <p>About</p>
       <p>Work</p>
       <p>Testimonials</p>
       <p>Contact</p>
       <Sun/>
       <div className="bg-black , rounded-md text-white p-1" >
        <p>Download CV</p>
       </div>
     </div>
      <div className="md:hidden">
      <Menu/>
      </div>
    </div>
    );
}