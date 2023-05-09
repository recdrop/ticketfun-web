import Profile from "@/src/components/Profile";
import withAuth from "@/src/components/withAuth/indext";
import React from "react";

function Resume() {
  return (
    <>
      <div>Resume- Você está em um tela logada</div>
      <Profile></Profile>
    </>
  );
}

export default withAuth(Resume);
