import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tileInfo }) => {
  return (
    <div>
      {
        tileInfo.map(({ name, ...rest }, index) => (
          <Tile 
            key={index}
            name={name}
            description={rest}
          />
      ))}
    </div>
  );
};
