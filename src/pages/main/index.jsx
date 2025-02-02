import { useState } from "react";
import { Container } from "./style";
import CarTable from "../../components/table";
import ModalCard from "../../components/modal";
import { Plus } from "../../components/table/style";
import GenericButton from "../../components/Generic/button";
import React from "react";
import { Exit } from "../../components/modal/style";

const MainPage = (props) => {
  const [modal, setModal] = useState(false)
  const openHandler = () => {
    setModal(true)
  }
  const closeHandler = ()=>{
    setModal(false)
  }
  return (
    <Container>
      <ModalCard status={modal} state={setModal}>
        <GenericButton onClick={closeHandler} borderRadius={50} width={36} height={36} bg='#EFEFEF'><Exit /></GenericButton>
      </ModalCard>
      <CarTable >
        <GenericButton> <Plus /> Kategoriya qo’shish</GenericButton>
        <GenericButton onClick={openHandler}> <Plus /> Mashina qo’shish</GenericButton>

      </CarTable>
    </Container>
  );
};

export default MainPage;
