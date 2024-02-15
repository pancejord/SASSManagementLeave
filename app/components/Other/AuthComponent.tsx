import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";


const AuthComponent = () => {
  return (
    <div className='bg-slate-300 min-h-screen min-w-screen flex items-center justify-center'>
      <div className='flex items-center justify-center h-64 w-3/12 mb-36 rounded-full bg-slate-200'>
        <Button className="hover:scale-110 bg-black text-white" size={'lg'}>
        <FcGoogle size='24' className="mr-3" />
            Sign in with Google

        </Button>
      </div>
    </div>
  );
};

export default AuthComponent;
