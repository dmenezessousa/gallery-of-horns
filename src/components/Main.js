import React from "react";
import HornedBeast from "./HornedBeast";
import data from "../data.json";

class Main extends React.Component {
  render() {
    return (
      <>
        {data.map((animalData) => {
          return (
            <HornedBeast
              key={animalData.id}
              image_url={animalData.image_url}
              title={animalData.title}
              description={animalData.description}
              keyword={animalData.keyword}
              horns={animalData.horns}
            />
          );
        })}
      </>
    );
  }
}

export default Main;
