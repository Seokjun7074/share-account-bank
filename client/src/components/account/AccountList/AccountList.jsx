import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdCreditCard } from "react-icons/md";
import AccountItem from "components/account/AccountItem/AccountItem";
import * as S from "components/account/AccountList/AccountList.style";
import { useCallback, useEffect, useRef, useState } from "react";
import useModal from "hooks/useModal";
import MainAccountModal from "components/account/MainAccountModal/MainAccountModal";
import Modal from "components/@common/Modal/Modal";
import SampleNextArrow from "components/@common/CarouselArrow/SampleNextArrow";
import SamplePrevArrow from "components/@common/CarouselArrow/SamplePrevArrow";

const AccountList = ({ accountList, openModal }) => {
  const { openModal: openCreateAccountModal, closeModal: closeCreateAccountModal } = useModal("createMainAccount");
  const [havaMainAccount, setHaveMainAccount] = useState(true);
  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const findMainAccount = (responseData) => {
    const findedData = responseData?.find((item) => item.represented);
    if (findedData === undefined) return false;
    return true;
  };
  useEffect(() => {
    setHaveMainAccount(findMainAccount(accountList));
  }, [accountList]);

  const sliderSetting = {
    dots: false,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <S.AccountListWrapper>
        <SamplePrevArrow onClick={previous} />
        <S.AccountListContainer>
          <S.StyledSlider {...sliderSetting} ref={slickRef}>
            {!havaMainAccount && (
              <>
                <S.CreateMainAccountContainer>
                  <h3>주계좌가 없습니다.</h3>
                  <S.CreateMainAccountButtonContainer onClick={openCreateAccountModal}>
                    <S.CreateMainAccountButton>주계좌 설정하러가기</S.CreateMainAccountButton>
                    <MdCreditCard size={"2rem"} />
                  </S.CreateMainAccountButtonContainer>
                </S.CreateMainAccountContainer>
              </>
            )}
            {accountList?.map((group) => (
              <AccountItem
                key={group.accountId}
                accountId={group.accountId}
                balance={group.balance}
                openModal={openModal}
              />
            ))}
          </S.StyledSlider>
        </S.AccountListContainer>
        <SampleNextArrow onClick={next} />
      </S.AccountListWrapper>
      <Modal id="createMainAccount">
        <MainAccountModal accountList={accountList} closeModal={closeCreateAccountModal} />
      </Modal>
    </>
  );
};

export default AccountList;
