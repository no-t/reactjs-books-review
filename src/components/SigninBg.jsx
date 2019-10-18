import React from 'react';
import { Col } from 'antd';
import bg from '../images/bg_signin.jpg';

export default function SigninBg() {
  return (
    <Col span={12}>
      <img src={bg} style={{ width: '100%' }} alt="Signin" />
    </Col>
  );
}
