import * as yup from 'yup';

let schema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  identidade: yup.number("Identidade só deve conter números").positive("Identidade só deve conter números").integer("Identidade só deve conter números"),
  numeroCpf: yup.number().required("CPF é obrigatório").positive().integer(),
  dataNascimento: yup.date().required("Data de nascimento é obrigatória"),
  genero: yup.string(),
  estadocivil: yup.string(),
  veiculo: yup.string(),
  habilitacao: yup.string(),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  telefone: yup.number("Telefone só deve conter números").required("Telefone é obrigatório").positive("Telefone só deve conter números").integer("Telefone só deve conter números"),
  telefone2: yup.number("Telefone só deve conter números").positive("Telefone só deve conter números").integer("Telefone só deve conter números"),
  numeroCep: yup.number().required("CEP é obrigatório").positive().integer(),
  endereco: yup.string().required("Endereço é obrigatório"),
  numero: yup.number().required("Número é obrigatório"),
  complemento: yup.string(),
  bairro: yup.string().required("Bairro é obrigatório"),
  cidade: yup.string().required("Cidade é obrigatório"),
  cargoPretendido: yup.string().required("Cargo é obrigatório"),
  experiencia: yup.string(),
});

export default schema;