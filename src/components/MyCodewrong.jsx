// my code given below
// import { useState } from "react";
// const ANIMALS = ["", "bird", "cat", "dog", "rabbit", "reptile"];
// // const breeds = ["german","bulldog",'husky']
// const breeds =[
//   {
//     animal:0,
//     breedName:"Select an options"
//   },
//   {
//     animal:1,
//     breedName:"german shepherd"
//   },
//   {
//     animal:1,
//     breedName:"Bull dog"
//   },
//   {
//     animal:0,
//     breedName:"Select an options"
//   },


//   {
//     animal:2,
//     breedName:'street cat'
//   },
//   {
//     animal:2,
//     breedName:'persian'
//   }
// ]


// export default function SearchParams () {
//   const [location, setLocation] =useState('ABC');
//   const [animal ,setAnimal] =useState("");
//   const [selectBreeds,setSelectBreed]=useState=([])
//   const [breed,setBreed] =useState("")
//     // const location = "Seattle, WA";
//     // console.log('location',location);
//     const handleChange =(e)=>{
//       // console.log('location',location);
//             console.log('e',e);
//             setLocation(e.target.value)
//           }


//             // store anmial options
//             const handleAnimalChange = (e)=>{
//               console.log('e',e);
//               let value =e.target.value;
//               setAnimal(value);


//             };
//             // select cat kiya to phir ye filter pe ja kar check karay ga aur uski breed show karwaega

//       // setLocation('zubair')

//     // console.log(animal);
//     // console.log(breeds);


//   return (
//     <div className="search-params">
//       <form>
//         <label htmlFor="location">
//           Location
//           <input
//            id="location" 
//            onChange={handleChange}
//           value={location}
//           type="text"
//            placeholder="Location" />
//         </label>

//         {/* label2 */}
        
//         <label htmlFor="location">
//           Animal 
//           <select 
//           name="animal" 
//           id="animal"
//           value={animal}
//           onChange ={handleAnimalChange}
//           onBlur ={handleAnimalChange}
//           >
//             {ANIMALS.map((item)=>{
//               return(
//                 <option value={item}>{item}</option>

//               )
//             })

//             }
//             <option value='bird'>Bird</option>
//             <option value='cat'>Cat</option>

//           </select>
//           </label>

//           {/* breed  */}
//           <label htmlFor="breed">
//           Breed
//           <select
//             // disabled={!breeds.length}
//             id="breed"
//             value={breed}
//             onChange={(e) => setBreed(e.target.value)}
//             onBlur={(e) => setBreed(e.target.value)}
//           >
//             {breeds.map((breed,index) => (
//               // <option value="german">German</option>
//               <option key={breed} value={breed}>
//                 {breed.breedName}
//               </option>
//             ))}
//             {/* <option value="german">German</option> */}

//           </select>
//         </label>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }
