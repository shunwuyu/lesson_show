import React from 'react'
import ReactDOM from 'react-dom'
import { WingBlank, WhiteSpace, Button, Badge } from 'antd-mobile'

const repo = 'https://github.com/cncolder/antd-mobile-web'

const App = () => (
    <WingBlank>
        <WhiteSpace size='lg' />
        <Button
            type='primary'
            onClick={() => location.href = repo}>
            Ant design mobile web entry
            <Badge text='new' />
        </Button>
    </WingBlank>
)

ReactDOM.render(<App /> , document.getElementById('example'))