export interface MainProps {
  shouldCollapse: boolean;
  goToSignUp: () => void;
  handleSignIn: () => Promise<void>;
}
