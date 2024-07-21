import { FormItem, Password, Form, Submit } from '@formily/antd-v5';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import { Card, Input, Tabs, TabsProps } from 'antd';
import * as ICONS from '@ant-design/icons';
import React from 'react';
import { VerifyCode } from './VerifyCode';

const normalForm = createForm({
  validateFirst: true,
});

const phoneForm = createForm({
  validateFirst: true,
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    VerifyCode,
  },
  scope: {
    icon(name) {
      return React.createElement(ICONS[name]);
    },
  },
});

const items: TabsProps['items'] = [
  {
    label: '账密登录',
    key: '1',
    children: (
      <Form
        form={normalForm}
        layout="vertical"
        size="large"
        onAutoSubmit={(values) => console.log(values)}
      >
        <SchemaField>
          <SchemaField.String
            name="username"
            title="用户名"
            required
            x-decorator="FormItem"
            x-component="Input"
            x-validator={{ required: true }}
            x-component-props={{
              prefix: "{{icon('UserOutlined')}}",
            }}
          />
          <SchemaField.String
            name="password"
            title="密码"
            required
            x-decorator="FormItem"
            x-component="Password"
            x-component-props={{
              prefix: "{{icon('LockOutlined')}}",
            }}
          />
          <SchemaField.String />
        </SchemaField>
        <Submit block size="large">
          登录
        </Submit>
      </Form>
    ),
  },
  {
    label: '手机登录',
    key: '2',
    children: (
      <Form
        form={phoneForm}
        layout="vertical"
        size="large"
        onAutoSubmit={(values) => console.log(values)}
      >
        <SchemaField>
          <SchemaField.String
            name="phone"
            title="手机号"
            required
            x-decorator="FormItem"
            x-component="Input"
            x-validator={{ required: true }}
            x-component-props={{
              prefix: "{{icon('PhoneOutlined')}}",
            }}
          />
          <SchemaField.String
            name="verifyCode"
            title="验证码"
            required
            x-decorator="FormItem"
            x-component="VerifyCode"
            x-component-props={{
              prefix: "{{icon('LockOutlined')}}",
            }}
            x-reactions={[
              {
                dependencies: ['.phone#value', '.phone#valid'],
                fulfill: {
                  state: {
                    'component[1].readyPost': '{{$deps[0] && $deps[1]}}',
                    'component[1].phoneNumber': '{{$deps[0]}}',
                  },
                },
              },
            ]}
          />
        </SchemaField>
        <Submit block size="large">
          登录
        </Submit>
      </Form>
    ),
  },
];

const Markup = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card style={{ width: 400 }}>
        <Tabs style={{ overflow: 'visible', marginTop: -10 }} items={items} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <a href="#新用户注册">新用户注册</a>
          <a href="#忘记密码">忘记密码?</a>
        </div>
      </Card>
    </div>
  );
};

export default Markup;
