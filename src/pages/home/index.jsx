import bannerImage from "../../assets/banner.png";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Container, TextContent, Title, TitleHighlight } from "./styles";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Flex, Image, Heading } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();

  const imageUrls = [
    [1, 2, 3],
    ["1", "2", "3"],
    ["tabatha", "lua", "nico"],
    ["a", "c", "b"], // Adicione mais URLs conforme necessário
  ];

  function getRandomImages(imageUrls) {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    console.log("índice randomico", randomIndex);
    return imageUrls[randomIndex];
  }

  console.log("subarrays", imageUrls);
  console.log("tipo", typeof imageUrls);

  const randomImage = getRandomImages(imageUrls);
  console.log("Escolha aleatória das imagens", randomImage);

  return (
    <Flex
      justify="center"
      align="center"
      h="200px"
      direction="column"
      gap="35px"
    >
      <Heading>Olha só galera:</Heading>
      <Image src={randomImage} alt="Banner Image" w="50%" h="100%" />
    </Flex>
  );
};

export { Home };

{
  /*  <Header />
 <Container>
   <div>
     <Title>
       <TitleHighlight>
         Implemente <br />
       </TitleHighlight>
       o seu futuro global agora!
     </Title>
     <TextContent>
       Domine as tecnologias utilizadas pelas empresas mais inovadoras do
       mundo e encare seu novo desafio profissional, evoluindo em
       comunidade com os melhores experts.
     </TextContent>
     <Button
       title="Começar agora"
       variant="secondary"
       onClick={handleClickSignIn}
     />
   </div>
   <div>
     <img src={bannerImage} alt="Imagem principal" />
   </div>
 </Container> */
}
