/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

import Input from '@components/Input';

interface OptionalProps {
  isVisible?: boolean;
  hasBorder?: boolean;
}

export const Container = styled.div<OptionalProps>`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const FieldInput = styled(Input)`
  width: 100%;
  margin: 0;
  border: 0;
  background-color: ${({ theme }) => theme.colors.discretGrey};
  transition: background 300ms;

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.discretGrey};
    background-color: white;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`;

export const ItemContainer = styled.div<{ hasBorder?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  border: ${({ theme, hasBorder }) => (hasBorder ? `1px solid ${theme.colors.discretGrey}` : 'none')};
  cursor: pointer;
  transition: 250ms;

  :hover {
    transform: scale(0.98);
  }
`;

export const TextContent = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.titleGrey};
  font-weight: 600;
`;

export const ArrowIcon = styled(IoIosArrowForward)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.titleGrey};
`;
