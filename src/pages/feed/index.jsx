import { Header } from "../../components/Header";

import { Card } from "../../components/Card";
import { Container, Column, Title, TitleHighlight } from "./styles";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={35}
            name="Tabatha Pradier"
            image="https://avatars.githubusercontent.com/u/108781152?v=4"
          />
          <UserInfo
            percentual={65}
            name="Tabatha Pradier"
            image="https://avatars.githubusercontent.com/u/108781152?v=4"
          />
          <UserInfo
            percentual={51}
            name="Tabatha Pradier"
            image="https://avatars.githubusercontent.com/u/108781152?v=4"
          />
          <UserInfo
            percentual={88}
            name="Tabatha Pradier"
            image="https://avatars.githubusercontent.com/u/108781152?v=4"
          />
        </Column>
      </Container>
    </>
  );
};
export { Feed };
