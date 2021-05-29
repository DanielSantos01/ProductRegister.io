import styled from 'styled-components';

import { Button } from '@components/SubmitButton';

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 50px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: go-up 500ms forwards;

  @media(max-width: 778px) {
    padding: 50px;
  }
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.titleGrey};
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  font-style: italic;
  text-align: center;
  color: ${({ theme }) => theme.colors.titleGrey};
`;

export const ContentContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 470px;
  height: 500px;
  margin-top: 2vw;
  border-radius: 10px;

  @media(min-width: 778px) {
    width: 35%;
  }
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  height: 42px;
  margin-bottom: 30px;
`;

export const BackButton = styled(ConfirmButton)`
  background: ${({ theme }) => `linear-gradient(-180deg, ${theme.colors.headerSecondary}, ${theme.colors.headerPrimary})`};
`;
