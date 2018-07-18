import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Table, Pagination, Input, Row, Button, Modal, Form } from 'antd';
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
    dataSource: [{ username: "self", age: "18", address: "杭州", id: 1}],
    current: 1,
    size: 10,
    total: 1,
    visible: false,
    selectRow: null,
    modalType: "add"

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
      onOk() {
        const _dataSource = that.state.dataSource.filter((data) => {
          return data.id !== row.id
        });

        that.setState({
          dataSource: _dataSource
        })
      },
      onCancel() {

      }
    })
  }

  handleOk () {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const type = this.state.modalType;
        if (type == 'add') {
          const _dataSource = this.state.dataSource;
          _dataSource.unshift(values);
          this.setState({
            dataSource: _dataSource,
            visible: false
          });
        } else if (type == 'edit') {
          const _dataSource = this.state.dataSource;
          // console.log(_dataSource);
          const index = _dataSource.findIndex(data => data.id === this.state.selectRow.id)
          Object.assign(_dataSource[index], values)
          this.setState({
            dataSource: _dataSource,
            visible: false
          });
        }
        
        // console.log(_dataSource);
        // console.log(_dataSource.findIndex(this.state.selectRow));
      }
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
          <Search style={{width:300}} />
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
