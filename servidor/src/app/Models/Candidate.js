const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const Candidate = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
    nome: { type: String, required: true },
    identidade: { type: Number },
    numeroCpf: { type: Number, unique: true, required: true },
    dataNascimento: { type: Date, required: true },
    genero: { type: String },
    estadocivil: { type: String },
    veiculo: { type: String },
    habilitacao: { type: String },
    email: { type: String, unique: true, required: true },
    telefone: { type: Number, required: true },
    telefone2: { type: Number },
    numeroCep: { type: Number, required: true },
    endereco: { type: String, required: true },
    numero: { type: Number, required: true },
    complemento: { type: String },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    cargoPretendido: { type: String, required: true },
    experiencia: { type: String },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("candidate", Candidate);
