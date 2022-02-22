import { getPersonalInfo, getAge } from "../demo";

test('Given a string with name, lastname, birthday, age, university: Get an Object with this params', () => {
  // setup
  const personalInfo="paul rios,2001-02-15,poli";

  // ejecucion de la funcion que voy a probar
  const objectWithPersonalInfo = getPersonalInfo(personalInfo);

  // aserciones o validaciones
  expect(objectWithPersonalInfo).toEqual({
    name: "paul",
    lastname: "rios",
    age: 21,
    university: "poli"
  })
})

test('Given a string with a date, obtain the age', () => {
  // setup
  const birthday="1994-04-16";

  // ejecucion de la funcion que voy a probar
  const age = getAge(birthday);

  // aserciones o validaciones
  expect(age).toBe(28);
})

