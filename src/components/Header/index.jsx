import React from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import {
  Container,
  SearchInputContainer,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          <SearchInputContainer>
            <Input placeholder="Buscar..." />
          </SearchInputContainer>
          <Menu>Live code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
