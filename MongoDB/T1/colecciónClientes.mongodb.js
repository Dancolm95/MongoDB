use("dbTechStore")

db.clientes.insertMany([
  {
    Codigo: "001",
    Nombre: "Juan",
    Apellido: "Pérez",
    FechaDeNacimiento: new Date("1990-05-15T00:00:00Z"),
    Celular: "987654321",
    CategoriasDeInteres: ["Laptops", "Monitores", "Impresoras"]
  },
  {
    Codigo: "002",
    Nombre: "Ana",
    Apellido: "Gómez",
    Celular: "987654322",
    CategoriasDeInteres: ["Tablets", "Teclados", "Ratones", "Monitores"]
  },
  {
    Codigo: "003",
    Nombre: "Luis",
    Apellido: "Martínez",
    FechaDeNacimiento: new Date("1988-11-30T00:00:00Z"),
    Celular: "987654323",
    CategoriasDeInteres: ["Laptops", "Accesorios", "Impresoras", "Teclados"]
  },
  {
    Codigo: "004",
    Nombre: "María",
    Apellido: "López",
    FechaDeNacimiento: new Date("1988-02-17T00:00:00Z"),
    CategoriasDeInteres: ["Impresoras", "Monitores", "Proyectores"]
  },
  {
    Codigo: "005",
    Nombre: "Sofía",
    Apellido: "Ramírez",
    FechaDeNacimiento: new Date("1993-09-25T00:00:00Z"),
    Celular: "987654326",
    CategoriasDeInteres: ["Tablets", "Accesorios", "Software", "Monitores"]
  }
]);

db.equipos.find()
db.clientes.find()

db.clientes.find().count()