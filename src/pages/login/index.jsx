import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  Column,
  Container,
  CreateAccountText,
  ForgotPasswordText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from '../../services/api';

const Login = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.senha}`
      );

      if (data.length && data[0].id) {
        navigate("/feed");
        return;
      }
      alert("Usuária ou senha inválidas");
    } catch (e) {
      //TODO Houve um erro
    }
  };

  console.log('errors', errors)

  return (
    <>
      <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                    <CreateAccountText>Criar Conta</CreateAccountText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
  );
};
export { Login };
