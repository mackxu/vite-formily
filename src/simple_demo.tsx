import { createForm } from '@formily/core';
import { FormProvider, Field, FormConsumer } from '@formily/react';
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from '@formily/antd-v5';

const form = createForm(); // 创建表单核心领域模型，它是作为MVVM设计模式的标准ViewModel

function Simple() {
  return (
    <FormProvider form={form}>
      <FormLayout layout="vertical">
        <Field
          name="input"
          title="姓名"
          required
          initialValue="zhangsan"
          decorator={[FormItem]}
          component={[Input]}
        />
      </FormLayout>
      <FormConsumer>
        {() => (
          <div
            style={{
              marginBottom: 20,
              padding: 5,
              border: '1px dashed #666',
            }}
          >
            实时响应：<pre>{JSON.stringify(form.values, null, 2)}</pre>
          </div>
        )}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={(values) => console.log(values)}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
}

export default Simple;
