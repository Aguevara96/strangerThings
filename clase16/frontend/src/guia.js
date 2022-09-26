let guia = {
	nivel1: "Buenos dias, en que lo puedo ayudar",
	rp: [{
		    ID: "",
		    texto: "Quiero comprar un celular",
		    siguiente : "",
		},  {
		    ID: "",
		    consulta: "Quiero mejorar mi abono"
        },
        {
            ID: "",
            texto: "Ya vio el modelo ? o la marca de celular ?",
            resp: ["SI->VA A UN ID", "NO-> OTRO ID"]
        },
        {
            ID: "",
            texto: "Como desea pagarlo, tarjeta de credito ? o debito ?",
            resp: ["Debito", "Credito", "No tengo acceso -> No tiene un familiar ??? o personal pay"]
        },
        {
            ID: " ",
            texto: "Me deberia brindar el numero de tarjeta, y codigo de seguridad"
        },
        {
            ID: "",
            texto: "Querido operador, tome nota del los numeros",
            tmpl: "NOMBRE_DEL_TEMPLATE"
        },
        {
            ID: "",
            texto: "Querido, operador, transferi la llamada a #324"
        }
    ]
}

// Estudiar la posibilidad de boton de panico, para que el supervisor esuche la 
// llamada.
