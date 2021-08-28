const mongoose = require('mongoose');

class Connection {
  constructor() {
    this.dataBaseConnectionMongoDB();
  }

  dataBaseConnectionMongoDB() {
    this.mongoDBConnection = mongoose.connect('mongodb+srv://dev:fPXRc1VNJ8mpknQg@cluster0.xjjff.mongodb.net/jobsNet?retryWrites=true&w=majority', {
      useNewUrlParser: true
    })
    .then(() => {
      console.log("Conexão estabelecida com sucesso");
    })
    .catch((error) => {
      console.log(`Erro ao estabelecer conexão: ${error}`);
    })
  }
}

module.exports = new Connection();