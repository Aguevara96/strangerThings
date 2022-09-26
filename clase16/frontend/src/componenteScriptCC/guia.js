let guiaz = {
	nivel1: "Buenos dias, en que lo puedo ayudar",
	rp: [{
		    ID: "",
		    texto: "Quiero comprar un celular",
		    siguiente : "290f88e7-dfdc-4be0-97e4-bb42a4204c5",
		},  {
		    ID: "",
		    consulta: "Quiero mejorar mi abono"
        },
        {
            ID: "290f88e7-dfdc-4be0-97e4-bb42a4204c5",
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

let guia = [{
        id: '078b0129-f8f5-442a-b8bb-1d0f9a01ccfe',
        prompt: "Buenos dias, en que lo puedo ayudar",
        salidas: [{
            texto: "Quiero comprar un celular",
            enlace : "290f88e7-dfdc-4be0-97e4-bb42a4204c5"
        }, {
            texto: "Quiero mejorar mi abono",
            enlace: ""
        }]
    }, {
        id: '290f88e7-dfdc-4be0-97e4-bb42a4204c5',
        prompt: "Ya vio el modelo ? o la marca de celular ?",
        salidas: [{
            texto: "Si, ya lo vi",
            enlace : ""
        }, {
            texto: "No, quiero averiguar",
            enlace: ""
        }]
    }
]

// Estudiar la posibilidad de boton de panico, para que el supervisor esuche la 
// llamada.
module.exports = guia
