import React, { useState } from "react";
import axios from "axios";
import "../../styles/Nutrition.css";

const Nutrition = () => {
  const [nutritionData, setNutritionData] = useState(null);

  const NutritionCard = ({ item }) => {
    return (
      <div className="nutrition-card">
        <h3>{item.name}</h3>
        <ul>
          <li>Calories: {item.calories}</li>
          <li>Serving Size: {item.serving_size_g}g</li>
          <li>Total Fat: {item.fat_total_g}g</li>
          <li>Saturated Fat: {item.fat_saturated_g}g</li>
          <li>Protein: {item.protein_g}g</li>
          <li>Sodium: {item.sodium_mg}mg</li>
          <li>Potassium: {item.potassium_mg}mg</li>
          <li>Cholesterol: {item.cholesterol_mg}mg</li>
          <li>Total Carbohydrates: {item.carbohydrates_total_g}g</li>
          <li>Fiber: {item.fiber_g}g</li>
          <li>Sugar: {item.sugar_g}g</li>
        </ul>
      </div>
    );
  };

  const fetchData = async () => {
    const apiKey = "YBfXKFNgp2fhGfPVd4UFfA==SzR9SeAJeiHL4269";
    const query = "tomato";

    try {
      const response = await fetch(
        `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": apiKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setNutritionData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    // <div>
    //   <h1>CalorieNinjas API Demo</h1>
    //   <button onClick={fetchData}>Fetch Data</button>
    //   {nutritionData && (
    //     <div>
    //       <h2>Nutrition Data for {nutritionData.query}</h2>
    //       <pre>{JSON.stringify(nutritionData, null, 2)}</pre>
    //     </div>
    //   )}
    // </div>
    <div>
      <h1>CalorieNinjas API Demo</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {nutritionData && <NutritionCard item={nutritionData} />}
    </div>
  );
};

export default Nutrition;
