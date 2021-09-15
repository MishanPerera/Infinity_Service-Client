import { addDays } from "date-fns";
import { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Date() {
  const [state, setState] = useState([]);

//   useEffect(() => {
//     if (state.length === 0) {
//       setState([
//         {
//           startDate: new Date(),
//           endDate: addDays(new Date(), 7),
//           key: "selection"
//         }
//       ]);
//     }
//   }, [state, setState]);

const setdate=(e)=>{
console.log(e)
}

  return (
    <div>
      <h1 style={{color:"white"}}>Hello</h1>
      <DateRangePicker
        onChange={(item) => setdate(item)}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
    </div>
  );
}
