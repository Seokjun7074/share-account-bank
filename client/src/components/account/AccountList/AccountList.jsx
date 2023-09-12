import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdCreditCard } from "react-icons/md";
import AccountItem from "components/account/AccountItem/AccountItem";
import * as S from "components/account/AccountList/AccountList.style";
import { useEffect, useState } from "react";
import useModal from "hooks/useModal";
import MainAccountModal from "components/account/MainAccountModal/MainAccountModal";
import Modal from "components/@common/Modal/Modal";

const AccountList = ({ accountList, openModal }) => {
  const { openModal: openCreateAccountModal, closeModal: closeCreateAccountModal } = useModal("createMainAccount");
  const [havaMainAccount, setHaveMainAccount] = useState(true);

  const findMainAccount = (responseData) => {
    const findedData = responseData?.find((item) => item.represented);
    if (findedData === undefined) return false;
    return true;
  };
  useEffect(() => {
    setHaveMainAccount(findMainAccount(accountList));
  }, [accountList]);

  const sliderSetting = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <S.AccountListWrapper>
        <S.StyledSlider {...sliderSetting}>
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
      </S.AccountListWrapper>
      <Modal id="createMainAccount">
        <MainAccountModal accountList={accountList} closeModal={closeCreateAccountModal} />
      </Modal>
    </>
  );
};

export default AccountList;
