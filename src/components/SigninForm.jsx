import React from 'react';
import { Row, Col, Input, Button, Icon } from 'antd';
import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: stretch;
  padding: 20px;
  height: 100%;
`;

const Title = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  color: #642828;
  text-transform: uppercase;

  margin-bottom: 60px;
`;

const Underline = styled.div`
  width: 95%;
  height: 1px;
  margin-top: 15px;
  margin-bottom: 15px;
  background: gray;
`;

const OutlinedButton = styled.div`
  display: inline-block;
  margin: 6px;
  padding: 4px;
  border: 2px solid #2233aa;
`;

const RedDot = styled.span`
  color: red;
  margin-left: 4px;
`;

const FormLabel = styled(Row).attrs(() => ({}))`
  padding-top: 5px;
  padding-bottom: 5px;
`;

const InputFormRow = styled(Row).attrs(() => ({}))`
  padding-top: 5px;
  padding-bottom: 15px;
`;

export default function SigninForm() {
  return (
    <StyledForm>
      <Title>LOG IN. START SEARCHING</Title>
      <section>
        <FormLabel>
          Email<RedDot>*</RedDot>
        </FormLabel>
        <InputFormRow>
          <Input
            prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="email"
          />
        </InputFormRow>
        <FormLabel>
          Password<RedDot>*</RedDot>
        </FormLabel>
        <InputFormRow>
          <Input type="password" />
        </InputFormRow>
        <Row>
          <Button>SIGN IN</Button>
        </Row>
      </section>

      <footer>
        <Underline />
        <Row>
          Need to create an account?
          <OutlinedButton>Signup</OutlinedButton>
        </Row>
        <Row>
          Forget your password?
          <OutlinedButton>RECOVERY</OutlinedButton>
        </Row>
      </footer>
    </StyledForm>
  );
}
