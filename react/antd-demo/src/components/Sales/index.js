import React from 'react';
import PropTypes from 'prop-types';
import { Constant } from '../../mock/_utils'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './sales.css';
const {Color} = Constant;
function Sales({ data }) {
  return (
    <div className="sales">
      <div className="title">Yearly Sales</div>
      <ResponsiveContainer minHeight={360}>
        <LineChart data={data}>
          <Legend
            verticalAlign="top"
            content={prop => {
              const { payload } = prop
              return (
                <ul className="legend clearfix">
                  {
                    payload.map((item, key) => (
                      <li key={key}>
                        <span className="radiusdot" style={{background: item.color}}/>
                      </li>
                    ))
                  }
                </ul>
              )
            }}/>
            <XAxis
              dataKey="name"
              axisLine={{stroke: Color.borderBase, strokeWidth: 1}}
              tickLine={false}  
            />
            <YAxis axisLine={false} tickLine={false} />
            <CartesianGrid 
              vertical={false}
              stroke={Color.borderBase}
              strokeDasharray="3 3"
            />
            <Tooltip
            wrapperStyle={{
              border: 'none',
              boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)',
            }}
            content={content => {
              const list = content.payload.map((item, key) => (
                <li key={key} className="tipitem">
                  <span
                    className="radiusdot"
                    style={{ background: item.color }}
                  />
                  {`${item.name}:${item.value}`}
                </li>
              ))
              return (
                <div className="tooltip">
                  <p className="tiptitle">{content.label}</p>
                  <ul>{list}</ul>
                </div>
              )
            }}
          />
            <Line
            type="monotone"
            dataKey="Food"
            stroke={Color.purple}
            strokeWidth={3}
            dot={{ fill: Color.purple }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="Clothes"
            stroke={Color.red}
            strokeWidth={3}
            dot={{ fill: Color.red }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="Electronics"
            stroke={Color.green}
            strokeWidth={3}
            dot={{ fill: Color.green }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Sales;