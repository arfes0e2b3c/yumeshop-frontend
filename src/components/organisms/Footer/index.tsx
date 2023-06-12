import { FC } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { colors } from 'src/styles/Tokens';
import Link from 'next/link';
import { mb, tb } from 'src/styles/Media';

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
  ${mb`
      padding: 16px;
  `}
`;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const MenuInner = styled.div`
  width: 520px;
  display: flex;
  flex-wrap: wrap;
  ${mb`
    width: 375px;
  `}
  ${tb`
    width: 375px;
  `}
`;

const MenuWrapper = styled.div`
  padding: 0px 16px;
  margin: 4px 0;
  :not(:last-child) {
    border-right: 1px solid #000;
  }
  ${mb`
    padding: 0px 8px;
  `}
  ${tb`
    padding: 0px 8px;
  `}
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  font-size: 18px;
  ${mb`
    font-size: 12px;
  `}
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
  ${mb`
    margin-top: 64px;
    font-size: 12px;
  `}
`;

type Menu = {
  id: number;
  text: string;
  href: string;
};

const menus: Menu[] = [
  {
    id: 1,
    text: 'メニューメニュー',
    href: '/',
  },
  {
    id: 2,
    text: 'メニューメニュー',
    href: '/',
  },
  {
    id: 3,
    text: 'メニュー',
    href: '/',
  },
  {
    id: 4,
    text: 'メニューメニュー',
    href: '/',
  },
  {
    id: 5,
    text: 'メニュー',
    href: '/',
  },
  {
    id: 6,
    text: 'メニュー',
    href: '/',
  },
  {
    id: 7,
    text: 'メニュー',
    href: '/',
  },
  {
    id: 8,
    text: 'メニューメニュー',
    href: '/',
  },
  {
    id: 9,
    text: 'メニューメニュー',
    href: '/',
  },
  {
    id: 10,
    text: 'メニューメニュー',
    href: '/',
  },
];
export const Footer: FC = () => (
  <Wrapper>
    <MenuContainer>
      <MenuInner>
        {menus.map((menu) => (
          <MenuWrapper key={menu.id}>
            <StyledLink href={menu.href}>{menu.text}</StyledLink>
          </MenuWrapper>
        ))}
      </MenuInner>
    </MenuContainer>
    <CopyrightText>
      Copyright {new Date().getFullYear()} YumemiShop
    </CopyrightText>
  </Wrapper>
);
