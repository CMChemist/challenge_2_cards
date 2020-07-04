import React from "react";
import { boilerPlateData } from "./data.js";

export default () => {
  const generateCardsFromData = collection => {
    return collection.map(item => {
      return (
        <Card 
          id={item.id} 
          price={item.price} 
          descriptions={item.description} 
        />
      );
    });
  };

  return <>{generateCardsFromData(boilerPlateData)}</>;
};

