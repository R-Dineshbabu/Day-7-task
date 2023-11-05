let request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload= function(){
    let data=request.response;
    let result =JSON.parse(data);
    console.log(result)

     //a.Get all the countries from Asia continent /region using Filter function

     const countriesInAsia = result.filter((country) => {
        return country.region === "Asia";
       });

       const countryNames = countriesInAsia.map((country) => country.name.common);
  
      console.log("Countries in Asia:");
       console.log(countryNames);
    
    //b.Get all the countries with a population of less than 2 lakhs using Filter function


    const countriesWithLowPopulation = result.filter((country) => {
        return country.population < 200000;
      });
  
      const countryNames1 = countriesWithLowPopulation.map((country) => country.name.common);
  
      console.log("Countries with a population less than 2 lakhs:");
      console.log(countryNames1);
    

    //c.Print the following details name, capital, flag, using forEach function
     result.forEach((country) => {
        const name = country.name.common;
        const capital = country.capital ? country.capital[0] : "N/A";
        const flag = country.flags.png;
  
        console.log("Country Name: " + name);
        console.log("Capital: " + capital);
        console.log("Flag URL: " + flag);
        console.log("--------------------");
      })
    
    //d.Print the total population of countries using reduce function
    const totalPopulation = result.reduce((accumulator, country) => {
        return accumulator + (country.population || 0);
      }, 0);
  
      console.log("Total Population of All Countries: " + totalPopulation);
    
    //e.Print the country that uses US dollars as currency.
    const countriesUsingUSD = result.filter((country) => {
        return country.currencies && country.currencies.USD;
      });
  
      if (countriesUsingUSD.length > 0) {
        console.log("Countries using USD as currency:");
        countriesUsingUSD.forEach((country) => {
          console.log(country.name.common);
        });
    }
}



