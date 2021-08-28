import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validate as validateCPF } from "gerador-validador-cpf";
import schema from "./schema";
import axios from "axios";

import * as S from "./styled.jsx";
import "./FormFields.css";

async function onSubmit(values) {
  console.log(values);
  try {
    const candidate = await axios.post("https://jobsnet-vagas.herokuapp.com/register", values);
    alert(candidate.data.message);
  } catch (error) {
    const mensagem = error.response.data.message;
    alert(mensagem);
  }
}

function onBlurCep(ev, setFieldValue) {
  const { value } = ev.target;

  const cep = value?.replace(/[^0-9]/g, "");

  if (cep?.length !== 8) {
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      if (data.erro) {
        document.getElementById("botao").style.backgroundColor = "#f83c33";
        document.getElementById("botao").innerHTML = "CEP inválido!";
      } else {
        document.getElementById("botao").style.backgroundColor = "#ebe6e6";
        document.getElementById("botao").innerHTML = "Buscar CEP";
        setFieldValue("endereco", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
      }
    });
}

function validate(values) {
  const errors = {};
  if (!validateCPF(values.numeroCpf)) {
    errors.numeroCpf = "CPF inválido";
  }
  return errors;
}

const FormFields = () => {
  return (
    <Formik
      validationSchema={schema}
      validate={validate}
      onSubmit={(values, {resetForm}) => {
        onSubmit(values);
        resetForm({values: ''});
      }}
      initialValues={{
        nome: "",
        identidade: "",
        numeroCpf: "",
        dataNascimento: "",
        genero: "",
        estadocivil: "",
        veiculo: "",
        habilitacao: "",
        email: "",
        telefone: "",
        telefone2: "",
        numeroCep: "",
        endereco: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        cargoPretendido: "",
        experiencia: "",
      }}
      render={({ setFieldValue }) => (
        <Form>
          <S.SectionTitle>Dados pessoais</S.SectionTitle>
          <S.Section className="grid-template-area">
            <div className="form-control-group nome">
              <label>Nome Completo:</label>
              <Field name="nome" id="nomeCompleto" type="text" />
              <ErrorMessage
                name="nome"
                component="div"
                className="form__error--style"
              />
            </div>

            <div className="form-control-group identidade">
              <label htmlFor="identidade">Identidade:</label>
              <Field
                name="identidade"
                id="identidade"
                placeholder="Ex.: 000000000"
              />
              <ErrorMessage
                name="identidade"
                component="div"
                className="form__error--style"
              />
            </div>

            <div className="form-control-group cpf">
              <label htmlFor="numeroCpf">CPF:</label>
              <Field
                name="numeroCpf"
                id="numeroCpf"
                placeholder="Ex.: 00000000000"
              />
              <ErrorMessage
                name="numeroCpf"
                component="div"
                className="form__error--style"
              />
            </div>

            <div className="form-control-group data-nascimento">
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <Field name="dataNascimento" id="dataNascimento" type="date" />
              <ErrorMessage
                name="dataNascimento"
                component="div"
                className="form__error--style"
              />
            </div>

            <div className="form-control-group genero">
              <label htmlFor="genero">Gênero:</label>
              <Field as="select" name="genero" id="genero">
                <option value="">Selecione</option>
                <option value="F">Feminino</option>
                <option value="M">Masculino</option>
                <option value="O">Outro</option>
                <option value="NA">Prefiro não responder</option>
              </Field>
            </div>

            <div className="form-control-group estado-civil">
              <label htmlFor="estadocivil">Estado Civil:</label>
              <Field as="select" name="estadocivil" id="estadocivil">
                <option value="">Selecione</option>
                <option value="solteiro">Solteiro</option>
                <option value="casado">Casado</option>
                <option value="outro">Outro</option>
              </Field>
            </div>

            <div className="form-control-group veiculo">
              <label htmlFor="veiculo">Possui veículo?</label>
              <Field as="select" name="veiculo" id="veiculo">
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </Field>
            </div>

            <div className="form-control-group habilitacao">
              <label htmlFor="habilitacao">Habilitação:</label>
              <Field as="select" name="habilitacao" id="habilitacao">
                <option value="">Selecione</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </Field>
            </div>
          </S.Section>

          <S.Section className="grid-template-area">
            <S.SectionTitle>Contato</S.SectionTitle>
            <div className="form-control-group email">
              <label htmlFor="email">Email:</label>
              <Field
                name="email"
                id="email"
                type="email"
                placeholder="exemplo@email.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="form__error--style"
              />
            </div>

            <div className="form-control-group telefone">
              <label htmlFor="telefone">Celular:</label>
              <Field
                name="telefone"
                id="telefone"
                type="tel"
                placeholder="Ex.: XX9XXXXXXXX"
                pattern="[0-9]{2}[9]{1}[0-9]{4}[0-9]{4}"
              />
              <ErrorMessage
                name="telefone"
                component="div"
                className="form__error--style"
              />
            </div>

            <div className="form-control-group telefone2">
              <label htmlFor="telefone2">Telefone Fixo:</label>
              <Field
                name="telefone2"
                id="telefone2"
                type="tel"
                placeholder="Ex.: XX9XXXXXXXX"
                pattern="[0-9]{2}[9]{1}[0-9]{4}[0-9]{4}"
              />
              <ErrorMessage
                name="telefone2"
                component="div"
                className="form__error--style"
              />
            </div>
          </S.Section>

          <S.Section className="grid-template-area">
            <S.SectionTitle>Endereço</S.SectionTitle>
            <div className="form-control-group cep">
              <label htmlFor="numeroCep">CEP:</label>
              <Field
                name="numeroCep"
                id="numeroCep"
                placeholder="Ex.: XXXXXXXX"
                onBlur={(ev) => onBlurCep(ev, setFieldValue)}
              />
              <ErrorMessage
                name="numeroCep"
                component="div"
                className="form__error--style"
              />
            </div>
            <button id="botao" className="busca-cep-button" type="button">
              Buscar CEP
            </button>

            <div className="form-control-group endereco">
              <label htmlFor="endereco">Endereço:</label>
              <Field name="endereco" id="endereco" type="text" />
              <ErrorMessage
                name="endereco"
                component="div"
                className="form__error--style"
              />
            </div>

            <div className="form-control-group numero">
              <label htmlFor="numero">Número:</label>
              <Field name="numero" id="numero" />
              <ErrorMessage
                name="numero"
                component="div"
                className="form__error--style"
              />
            </div>

            <div className="form-control-group complemento">
              <label htmlFor="complemento">Complemento:</label>
              <Field name="complemento" id="complemento" />
            </div>

            <div className="form-control-group bairro">
              <label htmlFor="bairro">Bairro:</label>
              <Field name="bairro" id="bairro" type="text" />
              <ErrorMessage
                name="bairro"
                component="div"
                className="form__error--style"
              />
            </div>

            <div className="form-control-group cidade">
              <label htmlFor="cidade">Cidade:</label>
              <Field name="cidade" id="cidade" type="text" />
              <ErrorMessage
                name="cidade"
                component="div"
                className="form__error--style"
              />
            </div>
          </S.Section>

          <S.Section
            className="grid-template-area"
            style={{ borderBottom: "none" }}
          >
            <S.SectionTitle>Candidatura</S.SectionTitle>
            <div className="form-control-group cargo">
              <label htmlFor="cargoPretendido">Cargo Pretendido:</label>
              <Field as="select" name="cargoPretendido" id="cargoPretendido">
                <option value="">Selecione</option>
                <option value="admRedes">Administrador de Redes</option>
                <option value="dataSci">Data Scientist</option>
                <option value="devBack">Desenvolvedor Back-end</option>
                <option value="devFront">Desenvolvedor Front-end</option>
                <option value="fullstack">Desenvolvedor Full Stack</option>
                <option value="devOps">Engenheiro DevOps</option>
              </Field>
              <ErrorMessage
                name="cargoPretendido"
                component="div"
                className="form__error--style"
              />
            </div>

            <div className="form-control-group experiencia">
              <label htmlFor="experiencia">Nível de Experiência:</label>
              <Field as="select" name="experiencia" id="experiencia">
                <option value="">Selecione</option>
                <option value="estagio">Estágio</option>
                <option value="junior">Junior</option>
                <option value="pleno">Pleno</option>
                <option value="senior">Sênior</option>
              </Field>
            </div>
          </S.Section>

          <button
            className="submit-button"
            type="submit"
            style={{ marginTop: "20px", width: "100%" }}
          >
            Enviar
          </button>
        </Form>
      )}
    />
  );
};

export default FormFields;
