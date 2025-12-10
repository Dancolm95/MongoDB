//Para que exista una colección deben existir documentos
//Los documentos estan compuestos por atributos

//Crear una bvase de datos
use("cell_store")

//Crear coleccion
db.products.insertOne({
    name: "Samsung",
    price: 3500
})

db.products.insertOne({
    name: "Xiaomi",
    price: 2500,
    color: "negro",
    ram: "16gb"
})