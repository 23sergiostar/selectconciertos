var opciones_conciertos=[{nombre:"AC/DC", valor:"acdc", precio:100},
{nombre:"Barón Rojo", valor:"baron", precio:80},
{nombre:"Iron Butterfly", valor:"iron", precio:120}
]

function crearDesplegable()
{
	var obj_select=document.createElement("select");
	obj_select.id="opciones_conciertos";
	obj_select.addEventListener("change", cambiarConcierto);

	var obj_option=document.createElement("option");
	obj_option.innerText="Seleccione una opción";
	obj_option.selected=true;
	obj_option.disabled=true;
	obj_select.appendChild(obj_option);
	for(i=0; i<opciones_conciertos.length; i++)
	{
		var obj_option=document.createElement("option");
		obj_option.innerText=opciones_conciertos[i].nombre;
		obj_option.value=opciones_conciertos[i].valor;
		obj_select.appendChild(obj_option);

	}
	
	document.getElementById("contenedor_desplegable").appendChild(obj_select);

}