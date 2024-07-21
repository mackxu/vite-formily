import { createElement } from 'react';
import { Card, Tabs } from 'antd';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import { Form, FormItem, Input, Password, Submit } from '@formily/antd-v5';
import * as ICONS from '@ant-design/icons';
import { VerifyCode } from './VerifyCode';
import type { TabsProps } from 'antd';

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    VerifyCode,
  },
  scope: {
    icon(name: any) {
      return createElement(ICONS[name]);
    },
  },
});

const normalForm = createForm({
  validateFirst: true,
});

const normalSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '用户名',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: '请输入用户名',
        prefix: "{{icon('UserOutlined')}}",
      },
    },
    password: {
      type: 'string',
      title: '密码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        placeholder: '请输入密码',
        prefix: "{{icon('LockOutlined')}}",
      },
    },
  },
};

const phoneForm = createForm({
  validateFirst: true,
});

const phoneSchema = {
  type: 'object',
  properties: {
    phone: {
      type: 'string',
      title: '手机号',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: '请输入手机号',
        prefix: "{{icon('PhoneOutlined')}}",
      },
      'x-validator': 'phone',
    },
    verifyCode: {
      type: 'string',
      title: '验证码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'VerifyCode',
      'x-component-props': {
        placeholder: '请输入验证码',
        prefix: "{{icon('LockOutlined')}}",
      },
      'x-reactions': [
        {
          dependencies: ['.phone#value', '.phone#valid'],
          fulfill: {
            state: {
              'component[1].readyPost': '{{$deps[0] && $deps[1]}}',
              'component[1].phoneNumber': '{{$deps[0]}}',
            },
          },
        },
      ],
    },
  },
};

const Json = () => {
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
          <SchemaField schema={normalSchema}></SchemaField>
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
          <SchemaField schema={phoneSchema} />
          <Submit block size="large">
            登录
          </Submit>
        </Form>
      ),
    },
  ];
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
        <Tabs
          style={{ overflow: 'visible', marginTop: -10 }}
          items={items}
        ></Tabs>
      </Card>
    </div>
  );
};

export default Json;
