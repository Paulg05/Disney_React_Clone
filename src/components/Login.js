import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get all there</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem vero aliquid dicta molestiae doloremque quos nulla
          ipsam debitis distinctio, aperiam earum! Temporibus possimus voluptas
          explicabo nesciunt eligendi voluptates reiciendis. Id.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .7;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  margin-top: 10px;
  padding: 17px 0px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.5px;
  transition: all 250ms;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`