import styled from '@emotion/styled';

const StyledSidebar = styled.div`
  &.sidebar {
    position: fixed;
    z-index: 3;
    top: 0;
    left: -290px;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #fff;
    transition: transform 0.3s linear;
    padding: 28px;
    border: 1px solid #FAFBFF;
    box-shadow: 0px 10px 60px 0px rgba(226, 236, 249, 0.5);

    &.active {
      transform: translateX(100%);
    }
  }

  .section-title_thumb {
    display: flex;
    align-items: flex-start;
  }

  .sidebar-menu-btn {
    display: block;
    margin-left: auto;
    border: 0;
    cursor: pointer;
    background-color: transparent;
  }

  .sidebar-nav {
    margin-top: 34px;
  }

  .user-container {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  @media (min-width: 1200px) {
    .main {
      position: relative;
      display: grid;
      width: 100%;
      grid-template-columns: 306px minmax(1134px, 1fr);
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      padding: 36px 28px 76px 28px;
      box-shadow: 0px 10px 60px 0px rgba(226, 236, 249, 0.5);

      &.active {
        transform: translateX(0); /* Change this to the desired value */
      }
    }

    .sidebar-menu-btn {
      display: none;
    }

    .user-container {
      margin-top: auto;
      display: flex;
      align-items: center;
    }

    .sidebar-nav {
      margin-top: 64px;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  line-height: 29px;
  color: #000000;
`;

const LogoTitle = styled.h1`
  margin-left: 8px;
`;

const LogoTitleText = styled.span`
  margin-left: 4px;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: #838383;
`;

const NavListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 11px 11px 11px 8px;
  border-radius: 8px;
  color: #9197B3;

  &.active {
    background-color: #5932EA;
    color: #ffffff;
  }
`;

const NavListItemLink = styled.a`
  margin-left: 14px;
  color: #9197B3;

  &.active {
    color: #ffffff;
  }
`;

const LinkIconArrow = styled.img`
  margin-left: auto;
`;

const UserInfo = styled.div`
  margin-left: 12px;
`;

const UserInfoTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
`;

const UserInfoText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #757575;
`;