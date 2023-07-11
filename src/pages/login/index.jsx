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

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias do mercado e entrar mais rápido nas empresas mais
            desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" />
              <Input placeholder="Senha" type="password" />
              <Button title="Entrar" variant="secondary" />
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
