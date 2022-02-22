export const getPersonalInfo = (personalInfo: string): Object => {
  const data=personalInfo.split(",");
  const [name, lastname]= data[0].split(" ");
  const age= getAge(data[1]);
  const university= data[2];
  return {name, lastname, age, university}
}
export const getAge = (date: string)=>{
  const [year, month, day] = date.split("-");
  const birthday= new Date(parseInt(year), parseInt(month), parseInt(day));
  const currentDate= new Date();
  const age= Math.round((currentDate.getTime()-birthday.getTime())/(1000*60*60*24*365));
  return age;
}