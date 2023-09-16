import { useEffect } from "react";
import Lottie from "lottie-react";
import useCompleteEffect from "hooks/useCompleteEffect";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

const CompleteEffect = ({ lottie, message, callback }) => {
  const { effectToggleState, closeEffect } = useCompleteEffect();

  useEffect(() => {
    if (effectToggleState) {
      setTimeout(() => {
        closeEffect();
        callback();
      }, 1500);
    }
  }, [effectToggleState]);

  return (
    <>
      {effectToggleState && (
        <CompleteEffectBackground onClick={closeEffect}>
          <CompleteEffectBody>
            <CompleteMessageContainer>
              <CompleteMessage>{message}</CompleteMessage>
            </CompleteMessageContainer>
            <Lottie
              animationData={lottie}
              style={{
                width: "120%",
              }}
            />
          </CompleteEffectBody>
        </CompleteEffectBackground>
      )}
    </>
  );
};

export default CompleteEffect;

const CompleteEffectBackground = styled(Flex)`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  z-index: 102;
  background-color: white;
`;

const CompleteEffectBody = styled.div`
  height: 100vh;
  text-align: center;
  z-index: 103;
`;

const CompleteMessageContainer = styled(Flex)`
  margin-top: 8rem;
  padding: 2rem;
  justify-content: start;
`;

const CompleteMessage = styled.h1`
  color: ${({ theme }) => theme.color.darkgray};
`;
