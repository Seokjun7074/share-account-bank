import { styled } from "styled-components";
import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { PATH } from "constants/path";

const NotFoundPage = () => {
  const handleGoHome = () => window.location.replace(PATH.ROOT);

  return (
    <NotFoundWrapper>
      <ImageContainer>
        <NoFlightImage src={process.env.PUBLIC_URL + "/image/no_flight.svg"} />
      </ImageContainer>
      <NotFound404Title>404</NotFound404Title>
      <NotFound404Title>존재하지 않는 페이지입니다.</NotFound404Title>
      <NotFound404Text>메인 페이지로 돌아가세요.</NotFound404Text>
      <NotFoundHomeButton onClick={handleGoHome}>메인 페이지로 돌아가기</NotFoundHomeButton>
    </NotFoundWrapper>
  );
};
export default NotFoundPage;

const NotFoundWrapper = styled(Flex)`
  flex-direction: column;
  height: 100vh;
  width: 100%;
  gap: 2rem;
`;

const ImageContainer = styled(Flex)`
  width: 100%;
  height: 35rem;
`;

const NoFlightImage = styled.img`
  /* width: 30%; */
`;

const NotFound404Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.color.red};
`;

const NotFound404Text = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.darkgray};
`;

const NotFoundHomeButton = styled(Button)`
  padding: 1rem 2.2rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: #ff6d7a;
  color: ${({ theme }) => theme.color.white};
  margin-top: 4rem;
  font-weight: 600;
`;
