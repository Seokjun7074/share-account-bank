import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { effectState } from "recoil/atoms";

const useCompleteEffect = (id) => {
  const [effectToggleState, setEffectToggleState] = useRecoilState(effectState);
  const openEffect = useCallback(() => {
    setEffectToggleState(true);
    document.body.style.overflow = "hidden";
  }, [setEffectToggleState]);

  const closeEffect = useCallback(() => {
    setEffectToggleState(false);
    document.body.style.overflow = "unset";
  }, [setEffectToggleState]);

  return { effectToggleState, openEffect, closeEffect };
};

export default useCompleteEffect;
