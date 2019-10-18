import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import SigninBg from '../components/SigninBg';
import SigninForm from '../components/SigninForm';

const Page = styled(Row).attrs(() => ({
  type: 'flex',
  align: 'middle',
}))`
  height: 100vh;
`;

const Title = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
  color: #642828;
  text-transform: uppercase;
`;

const SubTitle = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Underline = styled.div`
  width: 200px;
  height: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  background: linear-gradient(to right, #803b32, #ddb49b);
`;

const Contents = styled(Row).attrs(() => ({
  type: 'flex',
}))`
  margin-top: 50px;
  background-color: #f3f7f8;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
`;

export default function Signin() {
  return (
    <Page>
      <Col span={24}>
        <Title>MARKTUBE REVIEW SERVICE FOR BOOKS</Title>
        <SubTitle>PLEASE SHARE YOUR OPNION ON WEB DEVELPMENT BOOKS.</SubTitle>
        <Underline />
        <Contents>
          <SigninBg />
          <SigninForm />
        </Contents>
      </Col>
    </Page>
  );
}
