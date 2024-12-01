import { useState } from "react";
const ANIMALS = ["Select an Option", "bird", "cat", "dog", "rabbit", "reptile"];
// const breeds = ["", "Buldoog", "husky"];
const breedsData = [
  {
    animal: 0,
    breedName: "Select an Option",
  },
  {
    animal: 1,
    breedName: "german sheperd",
  },
  {
    animal: 1,
    breedName: "Bul Dog",
  },
  {
    animal: 2,
    breedName: "Persian",
  },
  {
    animal: 2,
    breedName: "russian",
  },
  {
    animal: 3,
    breedName: "paramount",
  },
];
function SearchParams() {
  const [location, setLocation] = useState("ABC");
  const [animal, setAnimal] = useState("");
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [breed, setBreed] = useState("");
  //   let location = "Seattle, WA";

  const handleChange = (e) => {
    console.log("e", e);
    setLocation(e.target.value);
  };
  const handleAnimalChange = (e) => {
    console.log("e", e);
    let value = e.target.value;
    setAnimal(value);

    if (value === "dog") {
      let filterData = breedsData.filter((item) => item.animal === 1);
      setSelectedBreeds(filterData);
    } else if (value === "cat") {
      let filterData = breedsData.filter((item) => item.animal === 2);
      setSelectedBreeds(filterData);
    }else{
      setSelectedBreeds([])
    }
  };
  console.log("location", location);
  console.log("animal", animal);
  console.log("breed", breed);
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={handleChange}
            value={location}
            type="text"
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={handleAnimalChange}
            onBlur={handleAnimalChange}
          >
            {ANIMALS.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
            {/* <option value="bird">Bird</option>
            <option value="cat">Cat</option> */}
          </select>
          <label htmlFor="breed">
            Breed
            <select
              // disabled={!breeds.length}
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              onBlur={(e) => setBreed(e.target.value)}
            >
              {selectedBreeds.map((breed, index) => (
                <option key={index} value={breed.breedName}>
                  {breed.breedName}
                </option>
              ))}
              {/* <option value="german">German</option> */}
            </select>
          </label>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;

















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
