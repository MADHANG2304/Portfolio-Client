
import './index.css';

function App() {
  return (
      <div className = "h-screen w-screen bg-slate-400 flex justify-center items-center">
        <div className = "h-3/6 w-1/4 bg-white rounded-md flex flex-col justify-center items-center">
        
        <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
          <u><h1 className="font-extrabold">Sign In Form</h1></u>
          <input type = "text" name = " " placeholder = "Name" className = "bg-slate-700 w-full font-bold rounded-sm h-10 p-3" ></input> 
          <input type = "email" name = " " placeholder = "Emaiil" className = "bg-slate-700 w-full font-bold rounded-sm h-10 p-3" ></input> 
          <input type = "number" name = " " placeholder = "Phone Number" className = "bg-slate-700 w-full font-bold rounded-sm h-10 p-3"  ></input> 
          <input type = "password" name = " " placeholder = "Password" className = "bg-slate-700 w-full font-bold rounded-sm h-10 p-3" ></input> 
          <button className = "bg-red-200  h-[20%] w-[50%] rounded-md"  >Submit</button>
        </form>
        
        </div>
      </div>
  );
}

export default App;
