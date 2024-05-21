const dias =(nombre)=>`Buenos dias ${nombre} `
const tardes = (nombre)=>`Buenas tardes ${nombre} `

const saludar=(nombrePersona, unBenditoCallback)=>{
  const construirSaludo  = unBenditoCallback(nombrePersona)
  return construirSaludo+ ' que tengas buen dia'; 
}

/*
console.log(saludar('nataly molano', tardes));
console.log(saludar('carlos', dias));
console.log(saludar('Sandy', (lapersona)=>`Buenas nochesss ${lapersona}`));
*/

const comer=(time)=>new Promise((res, rej)=>{
  if(time<12){
    res(saludar('nataly', tardes))
  }else if(time>12 && time<24){
    res(saludar('Carlos', tardes))
  }
  rej('Error hora invalida')
})

comer(26).then(respuesta=>{
  console.log(respuesta);
}).catch(err=>{
  console.error(err);
})