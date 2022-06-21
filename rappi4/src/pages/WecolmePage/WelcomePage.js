import { useEffect, useState } from "react";
import { useInRouterContext, useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import LogoWelcome from "../../images/logoWelcome.png";
import { goToLogin } from "../../routes/Coordinator";
import { Container, Imagem } from "./styledWelcome";

export default function WelcomePage() {
  useUnprotectedPage();

  const navigate = useNavigate();
  const [sec, setSec] = useState(3);

  useEffect(() => {
    if (sec > 0) {
      setTimeout(() => setSec(sec - 1), 1000);
    } else {
      goToLogin(navigate);
    }
  }, [sec]);

  return (
    <Container>
      <Imagem src={LogoWelcome} />
    </Container>
  );
}
