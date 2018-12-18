import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Page, NumberCard, Sales, Weather, ScrollBar, Quote } from './components';
import { Row, Col, Card } from 'antd';
import './App.css';
import Dashboard from './mock/dashboard';
import { Constant } from './mock/_utils';
const { Color } = Constant;
// console.log(Dashboard)

class App extends Component {
  render () {
    const { numbers, sales } = Dashboard;
    const numberCards = numbers.map((item, key) => (
      <Col key={key} lg={6} md={12}>
        <NumberCard {...item}/>
      </Col>
    ));
    console.log(numberCards);
    return (
      <Page
        className="dashboard"
        // loading
      >
        <Row gutter={24}>
          {numberCards}
          <Col lg={18} md={24}>
            <Card
              bordered={false}
              bodyStyle={{
                padding: '24px 36px 24px 0'
              }}
              >
              <Sales data={sales} />
            </Card>
          </Col>
          <Col lg={6} md={24}>
            <Row gutter={24}>
              <Col lg={24} md={12}>
                <Card 
                  bordered={false}
                  className="weather"
                  bodyStyle={{
                    padding: 0,
                    height: 24,
                    background: Color.blue
                  }}
                >
                <Weather
                  />
                </Card>
              </Col>
              <Col lg={24} md={12}>
                <Card
                  bordered={false}
                  className="quote"
                  bodyStyle={{
                    padding: 0,
                    height: 204,
                    background: Color.peach,
                  }}
                >
                  <ScrollBar>
                    <Quote />
                  </ScrollBar>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Page>
    );
  }
}

ReactDOM.render(<App 
  dashboard = {Dashboard}
  />, document.getElementById('root'));
