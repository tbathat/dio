import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://media.licdn.com/dms/image/D4D16AQHPiHEEkUmJ8g/profile-displaybackgroundimage-shrink_200_800/0/1672670579305?e=2147483647&v=beta&t=0gLNKLIighYijbmMIyh9yhe_z2EwozWRKXjfMWhF_nI" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/108781152?v=4" />
          <div>
            <h4>Tabatha Pradier</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML5 e CSS3</h4>
          <p>
            Projeto feito para o Bootcamp Web Developer...
            <strong> Saiba mais.</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 18
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
