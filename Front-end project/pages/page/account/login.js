import React,{useState} from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input, Col } from 'reactstrap';
import { LoginService } from '../../../services/User.Services';
import { useRouter } from "next/router";

const Login = (props) => {
    const router = useRouter();
    const [usernName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const loginEventHandler = () => {
        console.log(usernName,password);
        LoginService(usernName,password)
        .then((resp)=>{
            console.log(resp);
            router.push('/');
        })
        .catch(err=>setError(err));
    }
    return (
        <CommonLayout parent="home" title="login">
            <section className="login-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <Form className="theme-form">
                                    <div className="form-group">
                                        <Label for="username">Username</Label>
                                        <Input type="text" className="form-control" id="username" 
                                         placeholder="User Name" required
                                         onChange={(e)=> setUserName(e.target.value)}
                                         />
                                    </div>
                                    <div className="form-group">
                                        <Label for="password">Password</Label>
                                        <Input type="password" className="form-control" id="password" name='password'
                                            placeholder="Enter your password" required 
                                            onChange={(e)=> setPassword(e.target.value)}   
                                            />
                                    </div>
                                    {error}
                                    <a href="#"  className="btn btn-solid" onClick={loginEventHandler}>Login</a>
                                </Form>
                            </div>
                        </Col>
                        <Col lg="6" className="right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create A Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                                    able to order from our shop. To start shopping click register.</p><a href="#"
                                        className="btn btn-solid">Create an Account</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Login;