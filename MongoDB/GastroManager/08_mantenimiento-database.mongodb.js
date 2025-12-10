use('dbGastroManager')

db.pedidos.updateOne(
  { mesa: 2},
  { $set: { estado: "Servido" }}
)

db.pedidos.find({mesa: 2})