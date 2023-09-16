import Lottie from "lottie-react";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";
import useCompleteEffect from "hooks/useCompleteEffect";

const CompleteEffect = ({ lottie }) => {
  const { effectToggleState, closeEffect } = useCompleteEffect();
  return (
    <>
      {effectToggleState && (
        <CompleteEffectWrapper>
          <CompleteEffectBackground onClick={closeEffect}>
            <CompleteEffectBody>
              <Lottie
                animationData={lottie}
                style={{
                  height: "100%",
                }}
              />
            </CompleteEffectBody>
          </CompleteEffectBackground>
        </CompleteEffectWrapper>
      )}
    </>
  );
};

export default CompleteEffect;

const CompleteEffectWrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const CompleteEffectBackground = styled(Flex)`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(1px);
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  z-index: 102;
`;

const CompleteEffectBody = styled.div`
  height: 100vh;
  max-width: 300px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 103;
  background-color: transparent;
`;
