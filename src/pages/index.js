import React from 'react'
import Link from 'gatsby-link'

import {
  LineChart,
  Line,

  BarChart,
  Bar,
  ReferenceLine,

  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,

  RadialBarChart, RadialBar,

  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const SimpleLineChart = () => {
    const data = [
          {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
          {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
          {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
          {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
          {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
          {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
          {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ]

  	return (
    	<LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis yAxisId="left" />
       <YAxis yAxisId="right" orientation="right" />
       <Tooltip/>
       <Legend />
       <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    )
}

const SimpleBarChart = () => {
  const data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: -3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: -2000, pv: -9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: -1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: -3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];

  return (
    <BarChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Legend />
      <ReferenceLine y={0} stroke='#000'/>
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  )
}


const TwoLevelPieChart = () => {
  const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
  ]

  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis/>
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
    </RadarChart>
  )
}


const SimpleRadialBarChart = () => {

  const data = [
      {name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8'},
      {name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed'},
      {name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
      {name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d'},
      {name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c'},
      {name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57'},
      {name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658'}
    ];
    
  const style = {
  	top: 0,
  	left: 350,
  	lineHeight: '24px'
  };

  	return (
    	<RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey='uv'/>
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>
    );
}

const IndexPage = () => (
  <div>
    <h1>
      <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>
      と
      <a href="https://netlify.com/" target="_blank">Netlify</a>
      のテスト
    </h1>
    <p>
      Gatsby は React で静的なサイト生成が出来る仕組みで、
      netlify は静的なサイトを安価で公開するためのサービス。
    </p>

    <h2>サイト内リンクのテスト</h2>

    <ul>
      <li><Link to="/page-2/">Go to page 2</Link></li>
      <li><Link to="/blog/2018-04-12-test/">Go to a blog page</Link></li>
    </ul>

    <h2><a href="http://recharts.org/en-US" target="_blank">Recharts</a> のデモ</h2>

    <p>グイグイ動くね</p>

    <h3>Line chart</h3>

    <SimpleLineChart />

    <h3>Bar chart</h3>

    <SimpleBarChart />

    <h3>Radar chart</h3>

    <TwoLevelPieChart />

    <h3>Radial bar chart</h3>

    <SimpleRadialBarChart />

  </div>
)

export default IndexPage
