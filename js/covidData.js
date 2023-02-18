const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "88d50d776dmshd101ba9b3017263p16f178jsnd50a9aa37f20",
    "X-RapidAPI-Host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
  },
};

async function covidData() {
  try {
    const response = await fetch(
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia",
      options
    );
    const data = await response.json();
    data
      .filter((country) => country.Country == "Philippines")
      .map((datum) => {
        document.getElementById("confirmedCases").innerHTML =
          datum.TotalCases.toLocaleString("en-US");
        document.getElementById("totRecovered").innerHTML =
          datum.TotalRecovered.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("totDeaths").innerHTML =
          datum.TotalDeaths.toLocaleString("en-US");

        console.log(`Total Cases: ${datum.TotalCases} `);
        console.log(`Total Recovered: ${datum.TotalRecovered}`);
        console.log(`Total Deaths: ${datum.TotalDeaths}`);
      });
  } catch (err) {
    console.error(err);
  }
}
covidData();
