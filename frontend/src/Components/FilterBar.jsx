// import React from "react";

// const FilterBar = ({ cities, guideTypes, selectedCity, selectedType, onCityChange, onTypeChange }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: "30px",
//         marginBottom: "30px",
//         flexWrap: "wrap",
//       }}
//     >
//       {/* City Filter */}
//       <div>
//         <h3 style={{ marginBottom: "10px" }}>Choose a City</h3>
//         <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//           {cities.map((city) => (
//             <button
//               key={city}
//               onClick={() => onCityChange(city)}
//               style={{
//                 padding: "8px 15px",
//                 borderRadius: "20px",
//                 border: selectedCity === city ? "2px solid #007bff" : "1px solid #ccc",
//                 background: selectedCity === city ? "#007bff" : "#fff",
//                 color: selectedCity === city ? "#fff" : "#000",
//                 cursor: "pointer",
//                 transition: "all 0.3s",
//               }}
//             >
//               {city}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Guide Type Filter */}
//       <div>
//         <h3 style={{ marginBottom: "10px" }}>Choose a Guide Type</h3>
//         <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//           {guideTypes.map((type) => (
//             <button
//               key={type}
//               onClick={() => onTypeChange(type)}
//               style={{
//                 padding: "8px 15px",
//                 borderRadius: "20px",
//                 border: selectedType === type ? "2px solid #28a745" : "1px solid #ccc",
//                 background: selectedType === type ? "#28a745" : "#fff",
//                 color: selectedType === type ? "#fff" : "#000",
//                 cursor: "pointer",
//                 transition: "all 0.3s",
//               }}
//             >
//               {type}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterBar;
