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

////// ESTA HAY QUE BORRARLA LA DEJO SOLO COMO REFERENCIA

let guia = [{
        id: '078b0129-f8f5-442a-b8bb-1d0f9a01ccfe',
        prompt: "Buenos dias, en que lo puedo ayudar",
        salidas: [{
            texto: "Quiero comprar un celular",
            enlace : "290f88e7-dfdc-4be0-97e4-bb42a4204c5"
        }, {
            texto: "Quiero mejorar mi abono",
            enlace: "1bb578b2-0d90-49ec-8c14-401a9d486948"
        }]
    }, {
        id: '290f88e7-dfdc-4be0-97e4-bb42a4204c5',
        prompt: "Ya vio el modelo ? o la marca de celular ?",
        salidas: [{
            texto: "Si, ya lo vi",
            enlace : "ab7369a2-3ea2-11ed-b878-0242ac120002"
        }, {
            texto: "No, quiero averiguar",
            enlace: "8c8fcfcd-5687-4087-b13d-b5c438305a40"
        }]
    }, {
        id: '44426820-fb4f-4db4-bf56-e9c5dafffc6d',
        prompt: "Este prompr es provisiorio",
        salidas: [{
            texto: "Respuesta uno",
            enlace : ""
        }, {
            texto: "Respuesta dos",
            enlace: ""
        }]
    }, {
        id: '8c8fcfcd-5687-4087-b13d-b5c438305a40',
        prompt: 'Este mes Samsung está promocionando el modelo a13 de 128 gb en 53.000 pesos, y Motorola el celu g22 de 128 en 45.000. ',
        salidas: [{
            texto: "Quiere comprarlo",
            enlace : "ab7369a2-3ea2-11ed-b878-0242ac120002"
        }, {
            texto: "Lo va a pensar",
            enlace: "f87711cb-ff00-4dcd-a78e-0d30a28c8412"
        }]
    }, {
        id: "ab7369a2-3ea2-11ed-b878-0242ac120002",
        prompt: "Excelente, ese celular está con un 10 por ciento del descuento",
        salidas: [{
            texto: "Si, lo llevo",
            enlace : "a619c3c0-a681-4356-8593-3a011ad138d72"
        }, {
            texto: "No, no lo llevo",
            enlace: "f87711cb-ff00-4dcd-a78e-0d30a28c8412"
        }]
    }, {
        id: "a619c3c0-a681-4356-8593-3a011ad138d72",
        prompt: "Como desea pagarlo, tarjeta de credito ? o debito ?",
        salidas: [{
            texto: "Debito, credito",
            enlace : "3b5cd570-3eb8-11ed-b878-0242ac120002"
        },{
            texto: "No, no tengo tarjetas, no uso",
            enlace : "1bb578b2-0d90-49ec-8c14-401a9d486948"
        }]
    },
    {
        id: "3b5cd570-3eb8-11ed-b878-0242ac120002",
        prompt: "Me deberia brindar el numero de tarjeta, y codigo de seguridad",
        salidas: [{
            texto: "Querido operador, tome nota del los numeros",
            enlace : "f87711cb-ff00-4dcd-a78e-0d30a28c8412"
        },{
            texto: "No, se ortivo",
            enlace : "f87711cb-ff00-4dcd-a78e-0d30a28c8412"
        }]
    },

    {
        id: "1bb578b2-0d90-49ec-8c14-401a9d486948",
        prompt: "Querido, operador, transferi la llamada a #324",
        salidas: [{
            texto: "Finalizar",
            enlace : "f87711cb-ff00-4dcd-a78e-0d30a28c8412"
        }]
    },{
        id: "f87711cb-ff00-4dcd-a78e-0d30a28c8412",
        prompt: "Cortar, Volver al comienzo",
        salidas: [{
            texto: "GO GO GO GO GO",
            enlace : "078b0129-f8f5-442a-b8bb-1d0f9a01ccfe"
        }]
    }
]

// Estudiar la posibilidad de boton de panico, para que el supervisor esuche la 
// llamada.
module.exports = guia
