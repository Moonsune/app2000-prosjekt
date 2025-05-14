// Laget av Markus Moen Magnussen – dummyversjon

import { NextResponse } from "next/server";

export const GET = async () => {
  const dummyMenu = [
    {
      _id: "1",
      title: "Pizza Margherita",
      desc: "Klassisk pizza med tomatsaus og ost",
      priceSmall: 100,
      priceLarge: 150,
      img: "https://via.placeholder.com/300"
    },
    {
      _id: "2",
      title: "Pepperoni",
      desc: "Pizza med pepperoni og ekstra ost",
      priceSmall: 120,
      priceLarge: 170,
      img: "https://via.placeholder.com/300"
    }
  ];

  return NextResponse.json(dummyMenu);
};
