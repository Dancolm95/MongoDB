use('dbGastroManager')

//Eliminar todos los pedidos que tengan el estado: Pagado
db.pedidos.deleteMany(
  {estado: "Pagado"}
)

//Listado de los pedidos
db.pedidos.find()