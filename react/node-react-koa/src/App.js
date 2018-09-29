import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Table, Pagination, Input, Row, Button, Modal, Form, message } from 'antd';
import 'antd/dist/antd.css'
const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal;


class App extends Component {
  columns= [{
    dataIndex: "username", title: "用户"
  }, {
    dataIndex: "age", title: "年龄"
  }, {
    dataIndex: "address", title: "地址"
  }, {
    dataIndex: "action", title:"操作", width: 200, render: (text, row) => {
      return <div>
        <Button onClick={() => { this.setState({selectRow: row});this.modal('edit', row)}}>编辑</Button>
        <Button style={{ marginLeft: 10}} type="danger" onClick={() => this.remove(row)}>删除</Button>
      </div>
    }
  }]
  state = {
    dataSource: [],
    current: 1,
    size: 10,
    total: 1,
    visible: false,
    selectRow: null,
    search: '',
    modalType: "add",
    editRow: null
  }

  componentDidMount () {
    this.sizeChange(this.state.current, this.state.size)
  }

  sizeChange (current, size) {
    let data = {
      search: this.state.search,
      limit: size,
      offset: (parseInt(current) - 1) * size
    }

    axios.post("http://localhost:3006/user-search", data).then(data => { 
      this.setState({
        dataSource: data.data.rows,
        total: data.data.count,
        current,
        size
      })
    })
  }

  handleOk = () => {
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (err) return;
      let data = {
          username: value.username, age: value.age, address: value.address
      };
      if (this.state.modalType === 'add') {
          axios.post("http://127.0.0.1:3006/user", data)
              .then(msg => {
                  this.sizeChange(this.state.current, this.state.size);
                  this.setState({visible: false});
                  message.success('success!')
              })
      } else {
          axios.put("http://127.0.0.1:3006/user/" + this.state.editRow.id, data)
              .then(data => {
                this.sizeChange(this.state.current, this.state.size);
                this.setState({visible: false});
                message.success('success!')
              })
      }
  })
  }
  modal = (type, row) => {
    this.setState({
      visible: true,
      modalType: type
    }, () => {
      this.props.form.resetFields();
      if (type === 'add') return;
      this.props.form.setFieldsValue({
        username: row.username,
        age: row.age,
        address: row.address
      })
      this.setState({editRow: row})
    })
  }
  remove = (row) => {
    const that = this;
    // console.log(this);
    confirm({
      title: '是否要删除该用户?',
      okText: '是',
      okType: '否',
      cancelText: 'No',
      onOk () {
        axios.delete("http://127.0.0.1:3006/user/"+row.id)
          .then(data=>{
            that.sizeChange(that.state.current, that.state.size);
            message.success('success!')
          })
      }
    })
  }

  searchUser(event) {
    this.setState({
      search: event.target.value
    }, () => {
      this.sizeChange(1, 10)
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    return (
      <div className="App">
        <Row>
          <Search style={{width:300}} onChange={ this.searchUser.bind(this)}/>
          <Button type="primary" style={{marginLeft: 20}} onClick={() => this.modal('add')}>
          添加用户
          </Button>
        </Row>
        <Row style={{paddingTop: 20}}>
          <Table dataSource={this.state.dataSource} rowKey={row=>row.id} bordered columns={this.columns} pagination={false}/>
        </Row>
        <Row style={{paddingTop: 20}}>
          <Pagination showTotal={(total) => `共 ${total} 条`}
            current={this.state.current}
            total={this.state.total}
            pageSize={this.state.size}
            onChange={this.sizeChange}/>
        </Row>
        <Modal
          title={this.state.modalType === 'add'? '添加用户': "编辑用户"}
          onOk={ () => this.handleOk()}
          onCancel={() => this.setState({ visible: false })}
          visible={this.state.visible}
          >
          <Form>
            <FormItem label="用户" {...formItemLayout}>
              { getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!'}]
              })(
                <Input placeholder="Username" />
              )}
            </FormItem>
            <FormItem label="年龄"  {...formItemLayout}>
              {getFieldDecorator('age', {
                rules: [{ required: true, message: 'Please input your age!' }],
              })(
                <Input placeholder="age" />
              )}
            </FormItem>
            <FormItem label="地址"  {...formItemLayout}>
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Please input your address!' }],
              })(
                <Input placeholder="address" />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(App);
