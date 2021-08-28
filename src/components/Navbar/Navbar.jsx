import React from "react";

import * as S from "./styled";

const Navbar = () => {
  return (
    <S.NavArea style={{ width: "300px" }}>
      <S.Link href="#">Página Inicial</S.Link>
      <S.Link href="#">Sobre</S.Link>
      <S.Link href="#">Para Empresas</S.Link>
    </S.NavArea>
  );
};

export default Navbar;
