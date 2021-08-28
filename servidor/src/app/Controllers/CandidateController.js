const Candidate = require("../Models/Candidate");
const yup = require("yup");

class CandidateController {
  async register(req, res) {

    // ** Validação dos dados inseridos com yup **

    let schema = yup.object().shape({
      nome: yup.string().required(),
      identidade: yup.string(),
      numeroCpf: yup.number().required().positive().integer(),
      dataNascimento: yup.date().required(),
      genero: yup.string(),
      estadocivil: yup.string(),
      veiculo: yup.string(),
      habilitacao: yup.string(),
      email: yup.string().email().required(),
      telefone: yup.number().required().positive().integer(),
      telefone2: yup.string(),
      numeroCep: yup.number().required().positive().integer(),
      endereco: yup.string().required(),
      numero: yup.number().required(),
      complemento: yup.string(),
      bairro: yup.string().required(),
      cidade: yup.string().required(),
      cargoPretendido: yup.string().required(),
      experiencia: yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: true,
        message: "Dados inválidos!",
      });
    }

    // ** Verificação de CPF e email já cadastrados no banco de dados **
    
    let emailExist = await Candidate.findOne({ email: req.body.email });
    let cpfExist = await Candidate.findOne({ numeroCpf: req.body.numeroCpf });
    if(cpfExist) {
      return res.status(400).json({
        error: true,
        message: "CPF já cadastrado!",
      });
    }

    if(emailExist) {
      return res.status(400).json({
        error: true,
        message: "Email já cadastrado!",
      });
    }

    // ** Desestruturação dos dados da requisição **

    const {
      nome,
      identidade,
      numeroCpf,
      dataNascimento,
      genero,
      estadocivil,
      veiculo,
      habilitacao,
      email,
      telefone,
      telefone2,
      numeroCep,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      cargoPretendido,
      experiencia,
    } = req.body;

    // ** Criação da constante com os dados desestruturados **

    const newCandidate = {
      nome,
      identidade,
      numeroCpf,
      dataNascimento,
      genero,
      estadocivil,
      veiculo,
      habilitacao,
      email,
      telefone,
      telefone2,
      numeroCep,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      cargoPretendido,
      experiencia,
    };

    // ** Criação de um novo usuário no banco de dados com mensagens de erro e sucesso **

    await Candidate.create(newCandidate, (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Erro ao tentar inserir usuário",
        });

      return res.status(200).json({
        error: false,
        message: "Usuário cadastrado com sucesso!",
      });
    });
  }
}

module.exports = new CandidateController();
