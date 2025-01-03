

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div>
      <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
            <span className="label-text">Male</span>
            <input type="checkbox" className="checkbtn border-slate-900" 
               checked={selectedGender=== "male"}
               onChange={() => onCheckboxChange("male")}
            ></input>
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
            <span className="label-text">Female</span>
            <input type="checkbox" className="checkbtn border-slate-900" 
              checked={selectedGender=== "female"}
              onChange={() => onCheckboxChange("female")}
            ></input>
            </label>
        </div>
        
      </div>
    </div>
  )
}

export default GenderCheckbox



// const GenderCheckbox = () => {
//     return (
//       <div>
//         <div className="flex">
//           <div className="form-control">
//               <label className="label gap-2 cursor-pointer">
//               <span className="label-text">Male</span>
//               <input type="checkbox" className="checkbtn border-slate-900" ></input>
//               </label>
//           </div>
//           <div className="form-control">
//               <label className="label gap-2 cursor-pointer">
//               <span className="label-text">Female</span>
//               <input type="checkbox" className="checkbtn border-slate-900" ></input>
//               </label>
//           </div>
          
//         </div>
//       </div>
//     )
//   }
