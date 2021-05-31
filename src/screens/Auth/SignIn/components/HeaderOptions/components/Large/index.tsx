import React from 'react';

import Loader from '@components/Loader';
import { MainProps } from './interfaces';
import {
  Container,
  SignUpButton,
  ModelContainer,
  TextContent,
  AuxContainer,
  FieldInput,
} from './styles';

const HeaderOptions: React.FC<MainProps> = ({ goToSignUp, handleSignIn, isSubmiting }) => (
  <Container>
    <AuxContainer>
      <ModelContainer style={{ marginRight: 10 }}>
        <TextContent underline>About</TextContent>
      </ModelContainer>

      <ModelContainer>
        <TextContent underline>Contact Us</TextContent>
      </ModelContainer>
    </AuxContainer>

    <AuxContainer>
      <FieldInput placeholder="Login" className="input-login-signin" />

      <FieldInput placeholder="Password" type="password" className="input-password-signin" />

      <ModelContainer style={{ marginRight: 10 }} onClick={handleSignIn}>
        {isSubmiting ? <Loader size={18} /> : <TextContent underline>Sign In</TextContent>}
      </ModelContainer>

      <SignUpButton onClick={goToSignUp}>
        <TextContent>Sign Up</TextContent>
      </SignUpButton>
    </AuxContainer>
  </Container>
);

export default HeaderOptions;
