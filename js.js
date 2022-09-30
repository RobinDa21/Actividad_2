var json = [
    {
        apellido: "Charris",
        nombre: "Robinson",
        tipo_documento: "CC",
        número_documento: 123,
        ciudad: "Santo Tomás",
        dirección: "Carrera 7",
        télefono: 456,
        correo: "rob@gmail.com"
    },
    {
        apellido: "pacheco",
        nombre: "Andrea",
        tipo_documento: "P",
        número_documento: 156,
        ciudad: "Santo Tomás",
        dirección: "Calle 10",
        télefono: 789,
        correo: "andy@gmail.com"
    },
    {
        apellido: "Trocha",
        nombre: "Jaime",
        tipo_documento: "CC",
        número_documento: 1002,
        ciudad: "Barranquilla",
        dirección: "Calle 56",
        télefono: 765,
        correo: "jai@gmail.com"
    }
]

const registrar = () => {
    const apellido = document.getElementById("apellido").value
    const nombre = document.getElementById("nombre").value
    const tipo = document.getElementById("tipo").value
    const documento = parseInt(document.getElementById("documento").value)
    const ciudad = document.getElementById("ciudad").value
    const direccion = document.getElementById("direccion").value
    const telefono = parseInt(document.getElementById("telefono").value)
    const correo = document.getElementById("correo").value
    if (!apellido.trim()) {
        alert('Ingrese el apellido')
        return
    }
    if (!nombre.trim()) {
        alert('Ingrese el nombre')
        return
    }
    if (tipo == "Seleccione tipo Documento") {
        alert('Seleccione el tipo de documento')
        return
    }
    if (!documento) {
        alert('Ingrese el número de documento')
        return
    }
    if (!ciudad.trim()) {
        alert('Ingrese la ciudad')
        return
    }
    if (!direccion.trim()) {
        alert('Ingrese la direccion')
        return
    }
    if (!telefono) {
        alert('Ingrese el número de télefono')
        return
    }
    if (!correo.trim()) {
        alert('Ingrese el correo electrónico')
        return
    }
    for (let i = 0; i < json.length; i++) {
        const elemento = json[i]
        if (elemento.tipo_documento == tipo && elemento.número_documento == documento) {
            alert('Registro ya ingresado')
            return
        }
    }
    let tbody = document.getElementById('tregistros')
    let tbody2 = document.getElementById('tregistros2')
    tbody.innerHTML += "<tr><td>" + apellido + "</td><td>" + nombre + "</td><td>" + tipo + "</td><td>" + documento + "</td></tr>"
    tbody2.innerHTML += "<tr><td>" + ciudad + "</td><td>" + direccion + "</td><td>" + telefono + "</td><td>" + correo + "</td></tr>"
    const nuevo = { apellido: apellido, nombre: nombre, tipo_documento: tipo, número_documento: documento, ciudad: ciudad, dirección: direccion, télefono: telefono, correo: correo }
    json.push(nuevo)
}

const listar = () => {
    let tbody = document.getElementById('tregistros')
    let tbody2 = document.getElementById('tregistros2')
    let tablallena = ""
    let tablallena2 = ""

    for (let i = 0; i < json.length; i++) {
        tablallena += "<tr><td>" + json[i].apellido + "</td><td>" + json[i].nombre + "</td><td>" + json[i].tipo_documento + "</td><td>" + json[i].número_documento + "</td></tr>"
    }
    for (let i = 0; i < json.length; i++) {
        tablallena2 += "<tr><td>" + json[i].ciudad + "</td><td>" + json[i].dirección + "</td><td>" + json[i].télefono + "</td><td>" + json[i].correo + "</td></tr>"
    }
    tbody.innerHTML = tablallena
    tbody2.innerHTML = tablallena2
}