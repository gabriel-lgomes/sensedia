import { NextResponse } from "next/server";

const cities = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Porto Alegre",
  "Curitiba",
  "Salvador",
];

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  // Select 1 or 2 random weekdays (max 2)
  const daysCount = Math.floor(Math.random() * 2) + 1; // 1 or 2
  const shuffledDays = [...weekdays].sort(() => 0.5 - Math.random());
  const selectedDays = shuffledDays.slice(0, daysCount).join(", ");

  // Get random city
  const randomCity = cities[Math.floor(Math.random() * cities.length)];

  return NextResponse.json({
    city: randomCity,
    weekdays: selectedDays, // Returns max 2 days
  });
}
