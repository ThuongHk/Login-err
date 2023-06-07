import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { callApiLogin } from '../../redux/reducers/loginSlice';
const Login = () => {

  const dispatch = useDispatch()
  const formik = useFormik({    
    initialValues: {
      taiKhoan: '',
      password: ''
    },
    // validationSchema: yup.object({
    //   email: yup.string().required('Không bỏ trống mục này')
    // }),
    onSubmit: values => {
    //  dispatch(callApiLogin(values))
    const actionThunk = callApiLogin(values)
    dispatch(actionThunk)
   
    }
  })



  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
    <h1 className='text-center mt-4'>Log in</h1>
    <Form
     onSubmitCapture={formik.handleSubmit}
      name="normal_login"
      className="login-form w-25 m-auto mt-5"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: 'Please input your tai khoan!',
          },
        ]}
      >
        <Input type="text" prefix={<UserOutlined className="site-form-item-icon" />} name='taiKhoan' onChange={formik.handleChange} placeholder="Tài khoản" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="Password"
          name='password'
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {/* <button type='submit' className='btn btn-outline-primary btn-sm'>Log in</button> */}
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
{/* 
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <p>Tài khoản</p>
        <input type="text" className="form-control" name='taiKhoan' onChange={formik.handleChange}/>
      </div>
      <div className="form-group">
        <p>Password</p>
        <input type="password" className="form-control" name='password' onChange={formik.handleChange}/>
      </div>
      <button type='submit' className="btn btn-primary">Submit</button>
    </form> */}
    </>
  );
  
};

export default Login;