import logo from "@/modules/login/img/logo.png";
import working from "@/modules/login/img/working.png";

const Login = () => {
  return (
    <>
      <main className="container min-h-svh mx-auto gap-3 flex justify-center items-center">
        <div className="flex-[0_1_50rem] min-h-[90vh] ">
          <div>
            <img src={logo} alt="" className="h-24 w-24" />
          </div>
          <div className='container border-1 w-[300px] flex justify-center flex-col gap-7'>
            <h1>Login</h1>
           <label className="flex justify-center flex-col" htmlFor="">Usuario:
           <input className="border-2" type="text" name="Nombre" placeholder="Ingrese usuario"
             />
           </label>
           <label className="flex justify-center flex-col" htmlFor="">Contraseña:
           <input className="border-2" type="text" name="Nombre" placeholder="Ingrese contraseña"
             />
           </label>
           <button className="border-2 bg-blue-800 text-white font-sans" >Login</button>
          </div>
        </div>
        <div className="flex-[0_1_40rem] border max-md:hidden p-6 bg-gradient-to-l justify-center rounded from-slate-300/20 to-slate-300/20 flex items-center  min-h-[90vh] ">
          <div className="ring-2 min-h-[80vh] flex flex-col items-end rounded-md w-11/12 ring-white/20 bg-white/10 ">
          <div>
            <h1>Bienvenido Admin</h1>
          </div>
            <img className="" src={working} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
