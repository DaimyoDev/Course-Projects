import { faker } from "https://esm.sh/@faker-js/faker";

const flightsList = document.getElementById("flightsList");

const flights = [];

for (let i = 0; i < 30; i++) {
  const flight = {
    airline: faker.airline.airline(),
    airplane: faker.airline.airplane(),
    flightNumber: faker.airline.flightNumber(),
    airport: faker.airline.airport(),
  };
  flights.push(flight);
}

for (let i = 0; i < flights.length; i++) {
  const header = document.createElement("li");
  const airlineName = flights[i].airline.name;
  const airplaneType = flights[i].airplane.name;
  const flightNumber = flights[i].flightNumber;
  const airport = flights[i].airport.name;
  const airportName = document.createElement("p");
  const airportText = document.createTextNode(`Airport: ${airport}`);
  const flightNumberH = document.createElement("p");
  const flightNumberText = document.createTextNode(
    `Flight Number: ${flightNumber}`
  );
  const airlineH = document.createElement("p");
  const airlineText = document.createTextNode(`Airline: ${airlineName}`);
  const airplaneH = document.createElement("p");
  const airplaneText = document.createTextNode(
    `Airplane Type: ${airplaneType}`
  );
  airportName.appendChild(airportText);
  flightNumberH.appendChild(flightNumberText);
  airlineH.appendChild(airlineText);
  airplaneH.appendChild(airplaneText);
  header.appendChild(airportName);
  header.appendChild(flightNumberH);
  header.appendChild(airlineH);
  header.appendChild(airplaneH);
  flightsList.appendChild(header);
}
