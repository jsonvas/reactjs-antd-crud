import React, { createRef, useEffect } from 'react'
import { Input, Button, Form } from 'antd';

const {Item} = Form;

const EditUserForm = (props) => {

    const formRef = createRef();

    const formSuccess = (datos) => {
        datos.id = props.currentUser.id
        props.updateUser(datos);
    }

    const formError = (error) => {
        console.log(error);
    }

    useEffect(() => { 
        formRef.current.setFieldsValue(props.currentUser); 
    });

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 12,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 4,
            },
            sm: {
                span: 20,
            },
        },
    }

    return (
        <div>
            <Form 
                name="form"
                onFinish={formSuccess}
                onError={formError}
                ref={formRef}
                {...formItemLayout}
                style={{maxWidth: 400}}
                
            >
                <Item
                    label="Nombre: "
                    name="name"
                    rules={[{
                        required: true,
                        message: "Por favor ingrese su nombre."
                    }]}
                >
                    <Input
                        type="text"
                        placeholder="Ingrese nombre"
                    />
                </Item>
                <Item
                    label="Edad"
                    name="age"
                    rules={[{
                        required: true,
                        message: "Por favor ingrese su edad."
                    }]}
                >
                    <Input
                        type="number"
                        placeholder="Ingrese su edad"
                    />
                </Item>
                <Item
                    label="Dirección"
                    name="address"
                    rules={[{
                        required: true,
                        message: "Por favor ingrese su dirección."
                    }]}
                >
                    <Input
                        type="text"
                        placeholder="Ingrese su dirección"
                    />
                </Item>
                <Item>
                    <Button style={{marginLeft: 50, marginRight: 50}} type="primary" htmlType="submit">Enviar</Button>
                </Item>
            </Form>
        </div>
    )
}

export default EditUserForm