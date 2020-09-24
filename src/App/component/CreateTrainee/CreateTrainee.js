import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.min.css';
import './CreateTrainee.css'
class CreateTrainee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }
  onFinish = values => {
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return (
      <div className="createForm">
        <h1 className="title">添加学员</h1>
        <Form
          className='form'
          {...layout}
          name="basic"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >

          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: '姓名必须填写!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, message: '邮箱必须填写!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="办公室"
            name="office"
            rules={[{ required: true, message: '办公室必须填写!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="zoom id"
            name="zoomId"
            rules={[{ required: true, message: 'zoom id必须填写!' }]}
          >
            <Input />
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              <a href="#/">提交</a>
            </Button>
            <Button >
              <a href="#/">取消</a>
            </Button>
          </Form.Item>

        </Form>
      </div>

    );
  }
}

CreateTrainee.propTypes = {};

export default CreateTrainee;