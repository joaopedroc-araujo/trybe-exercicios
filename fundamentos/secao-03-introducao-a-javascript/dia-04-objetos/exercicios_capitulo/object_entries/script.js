let countries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };
  console.log(Object.entries(countries))
  let pairKeyValue = Object.entries(countries);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

  console.log(pairKeyValue);