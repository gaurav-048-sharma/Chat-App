import GenderCheckbox from "./GenderCheckbox"


const Signup = () => {
  return (
    <div className="flex flex-col itmes-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounder-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3x1 font-semibold text-center text-gray-300"> 
        signup<span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10"/>
          </div>
          <div>
          <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input type="text" placeholder="Johndoe" className="w-full input input-bordered h-10"/>
          </div>

          <label className="label p-2">
            <span className="text-base label-text ">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"/>

            <label className="label p-2">
            <span className="text-base label-text ">Confirm Password</span>
            </label>
            <input type="password" placeholder="Enter Confirm Password" className="w-full input input-bordered h-10"/>

            {/* gender checkbox */}

            <GenderCheckbox/>
            <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account?
            </a>

            <div>
            <button className=" btn btn-block flex justify-center btn-sm mt-2 border border-slate-700">Signup</button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Signup




// import GenderCheckbox from "./GenderCheckbox"


// const Signup = () => {
//   return (
//     <div className="flex flex-col itmes-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounder-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3x1 font-semibold text-center text-gray-300"> 
//         signup<span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text ">Full Name</span>
//             </label>
//             <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10"/>
//           </div>
//           <div>
//           <label className="label p-2">
//               <span className="text-base label-text ">Username</span>
//             </label>
//             <input type="text" placeholder="Johndoe" className="w-full input input-bordered h-10"/>
//           </div>

//           <label className="label p-2">
//             <span className="text-base label-text ">Password</span>
//             </label>
//             <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"/>

//             <label className="label p-2">
//             <span className="text-base label-text ">Confirm Password</span>
//             </label>
//             <input type="password" placeholder="Enter Confirm Password" className="w-full input input-bordered h-10"/>

//             {/* gender checkbox */}

//             <GenderCheckbox/>
//             <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//             Already have an account?
//             </a>

//             <div>
//             <button className=" btn btn-block flex justify-center btn-sm mt-2 border border-slate-700">Signup</button>
//           </div>
//         </form>

//       </div>

//     </div>
//   )
// }
