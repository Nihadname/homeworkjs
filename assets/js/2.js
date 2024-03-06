const companies = [
  { name: "Alpha Corp", category: "healthcare", start: 1992, end: 2014 },
  { name: "Delta Co", category: "technology", start: 1993, end: 2023 },
  { name: "Alpha Corp", category: "manufacturing", start: 1986, end: 2009 },
  { name: "Epsilon PLC", category: "retail", start: 1982, end: 2001 },
  { name: "Eta GmbH", category: "manufacturing", start: 1972, end: 2014 },
  { name: "Zeta Ltd", category: "retail", start: 1999, end: 2001 },
  { name: "Beta LLC", category: "finance", start: 1977, end: 2012 }
];

const ages = [12, 14, 34, 45, 67, 24, 26, 76, 26, 34, 56, 78, 35, 37, 41, 29];

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

companies.forEach(function (company) {
  console.log(company.name);
})
function IsDrinking() {
  let canDrink = [];
  for (let i = 0; ages.length; i++) {
    if (ages[i] >= 21) {
      canDrink.push(ages[i]);
    }
  }
  return canDrink;
}
console.log(IsDrinking());

const canDrink2 = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
})
console.log(canDrink2);
const canDrink3 = ages.filter(age => age >= 21);
console.log(canDrink3);


const retailCompanies = companies.filter((company) => {
  if (company.category == "retail") {
    return true;
  }
})
console.log(retailCompanies);
const retailCompanies2 = companies.filter(company => company.category === "retail");
let GettingStartOfTheCompanies=companies.filter(company=>(company.start>=1981&&company.start<1990));
console.log(GettingStartOfTheCompanies);
const lasted10Years=companies.filter(company=>(company.end-company.start>10));
console.log(lasted10Years);

const companyNames=companies.map((company)=>{
return company.name;
})
console.log(companyNames);
const testMap=companies.map((company)=> `${company.name} [${company.start}-${company.end}]`)
console.log(testMap);

const ageSquare=ages.map(value=>Math.sqrt(value));
console.log(ageSquare);
const powerOfEveryNumber=ages.map((value)=>{
  return value**2
})
console.log(powerOfEveryNumber);
const sortedCompanies=companies.sort((c1,c2){
  if(c1.start>c2.start){
    return 1
  }else{
    return -1;
  }
})