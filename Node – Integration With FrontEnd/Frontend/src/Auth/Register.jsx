import React from "react";
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from "antd";
import { Link } from "react-router-dom";
import registerImage from "../assets/register.png";
import useSignup from "../hooks/useSignup";

const Register = () => {
  const { loading, error, registerUser } = useSignup();

  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for exclusive access!
          </Typography.Text>

          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input size="large" placeholder=" Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
                { type: "email", message: "The input is not valid Email!" },
              ]}
            >
              <Input size="large" placeholder=" Enter your email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password size="large" placeholder=" Enter your password" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirm Password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder=" Re-enter your password"
              />
            </Form.Item>

            {error && (
              <Alert
                description={error.message || "An error occurred"}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="btn"
                style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
              >
                {loading ? <Spin /> : "Create Account"}
              </Button>
            </Form.Item>

            <Form.Item>
              <Link to="/login">
                <Button size="large" className="btn">
                  Sign In
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>

        <Flex flex={1}>
          <img src={registerImage} alt="Registration" className="auth-image" />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
