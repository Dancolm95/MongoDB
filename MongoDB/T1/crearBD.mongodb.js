//Crear una bvase de datos
use("dbTechStore")

db.equipos.insertOne({
  Nombre: "Laptop Asus",
  Categoria: "Portátiles",
  Precio: 2500,
  Stock: 30,
  Accesorios: ["Cargador", "Funda de protección", "Ratón inalámbrico"]
});

db.equipos.insertOne({
  Nombre: "Monitor LG",
  Categoria: "Monitores",
  Precio: 999,
  Stock: 20,
  Accesorios: ["Cable HDMI", "Base ajustable", "Adaptador de corriente"]
});

db.equipos.insertOne({
  Nombre: "Teclado Logitech",
  Categoria: "Teclados",
  Precio: 180,
  Stock: 30,
  Accesorios: ["Reposamuñecas", "Extractor de teclas", "Cable USB desmontable"]
});

db.equipos.insertOne({
  Nombre: "Impresora Epson",
  Categoria: "Impresoras",
  Precio: 1230,
  Stock: 100,
  Accesorios: ["Cartucho de tóner", "Cable USB", "Manual de usuario"]
});

db.equipos.insertOne({
  Nombre: "Tablet Lenovo",
  Categoria: "Tablets",
  Precio: 1750,
  Stock: 300,
  Accesorios: ["Cargador rápido", "Funda protectora", "Lápiz táctil"]
});

// Listar documentos de la colección
db.equipos.find()

//Listar los 3 primeros de la colección equipos
db.equipos.find().limit(3)

//Listar los 2 primeros de clientes
db.clientes.find().limit(2)

//Listar equipos con stock mayor a 100
db.equipos.find({ Stock: { $gte: 100 } })

//Actualizar monitor lg por monitor Samsung
db.equipos.updateOne(
  { Nombre: "Monitor LG" },
  { $set: { Nombre: "Monitor Samsung" } }
)
//Actualizar mprecio de la tablet lenovo de 1750 a 2350
db.equipos.updateOne(
  { Nombre: "Tablet Lenovo" },
  { $set: { Precio: 2350 } }
)
//Actualizar fecha de nacimiento de Ana Gomez por 06/06/2006
db.clientes.updateOne(
  { Nombre: "Ana", Apellido: "Gómez" },
  { $set: { FechaDeNacimiento: new Date("2006-06-06T00:00:00Z") } } 
)
//Actualizar celular de juan perez 
db.clientes.updateOne(
  { Nombre: "Juan", Apellido: "Pérez" },
  { $set: { Celular: 989654333 } } 
)

//Eliminar un documento de la colección equipos mediante el _id
db.equipos.deleteOne({ _id: ObjectId("6927ba18cfc1293513e37feb") })

//Eliminar los documentos de la colección equipos con stock de 30
db.equipos.deleteMany({ Stock: 30 })

//Eliminar en colección clientes a Maria López
db.clientes.deleteOne({ Nombre: "María", Apellido: "López" })


//Eliminar todos los elementos de la colección equipos
db.equipos.deleteMany({})

//Eliminar la colección clientes
db.clientes.drop()