import { FC } from 'react';
import styled from 'styled-components';
import { colors } from 'src/styles/Tokens';
import Link from 'next/link';
import { tb } from 'src/styles/media';
import { menus } from './const';

const Wrapper = styled.footer`
  width: 100%;
  padding: 16px 64px;
  font-size: 12px;
  background-color: ${colors.White};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  ${tb`
      padding: 16px;
  `}
`;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MenuRow = styled.div`
  width: 520px;
  display: flex;
  flex-wrap: wrap;
  ${tb`
    width: 375px;
  `}
`;

const MenuWrapper = styled.div`
  position: relative;
  padding: 0px 16px;
  margin: 4px 0;
  :not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 80%;
    border-right: 1px solid #000;
  }
  ${tb`
    padding: 0px 8px;
  `}
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  font-size: 18px;
  ${tb`
    font-size: 12px;
  `}
`;

const CopyrightText = styled.p`
  margin-top: 32px;
  font-size: 18px;
  ${tb`
    margin-top: 64px;
    font-size: 12px;
  `}
`;

export const Footer: FC = () => (
  <Wrapper>
    <MenuContainer>
      <MenuRow>
        {menus.first.map((menu) => (
          <MenuWrapper key={menu.id}>
            <StyledLink href={menu.href}>{menu.text}</StyledLink>
          </MenuWrapper>
        ))}
      </MenuRow>
      <MenuRow>
        {menus.second.map((menu) => (
          <MenuWrapper key={menu.id}>
            <StyledLink href={menu.href}>{menu.text}</StyledLink>
          </MenuWrapper>
        ))}
      </MenuRow>
      <MenuRow>
        {menus.third.map((menu) => (
          <MenuWrapper key={menu.id}>
            <StyledLink href={menu.href}>{menu.text}</StyledLink>
          </MenuWrapper>
        ))}
      </MenuRow>
    </MenuContainer>
    <CopyrightText>
      Copyright {new Date().getFullYear()} YumemiShop
    </CopyrightText>
  </Wrapper>
);
