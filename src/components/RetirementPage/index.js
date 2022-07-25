import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts'
import {Line} from 'rc-progress'

import {
  WelcomeContainer,
  HeadingElement,
  ParaElement,
  HeadingElement1,
  HeadingElement2,
  ContainerRetirement,
  WholeContainer,
  WholeContainer1,
  HrEle,
  HrElement,
  Select,
  Container12,
  Welcome,
  Welcome1,
  ExtraInfo,
  ExtraUpdate,
  Peer,
  Vr,
  ButtonElement,
  ViewHelp,
} from './styledComponents'

import './index.css'

const percentage = 78
const percentage1 = 95
const percentage2 = 59

const data = [
  {name: '20', x: 20, y: 20, z: 40},
  {name: '25', x: 25, y: 25, z: 50},
  {name: '30', x: 30, y: 30, z: 60},
  {name: '35', x: 35, y: 35, z: 70},
  {name: '40', x: 40, y: 40, z: 80},
  {name: '45', x: 45, y: 45, z: 90},
  {name: '50', x: 50, y: 50, z: 100},
  {name: '55', x: 55, y: 55, z: 110},
  {name: '60', x: 60, y: 60, z: 120},
  {name: '65', x: 65, y: 70, z: 130},
]

const RetirementPage = () => (
  <ContainerRetirement>
    <Container12>
      <HeadingElement>Retirement Income</HeadingElement>
      <HeadingElement1>Starting Year 2056</HeadingElement1>
      <WholeContainer1>
        <WelcomeContainer>
          <HeadingElement2>$300,000</HeadingElement2>
          <ParaElement>My Goal</ParaElement>
          <HrEle />
        </WelcomeContainer>
        <WelcomeContainer>
          <HeadingElement2>59%</HeadingElement2>
          <ParaElement>Goal Achieved</ParaElement>
          <HrEle />
        </WelcomeContainer>
        <WelcomeContainer>
          <HeadingElement2>$300</HeadingElement2>
          <ParaElement>Est.Monthly Income</ParaElement>
          <HrEle />
        </WelcomeContainer>
      </WholeContainer1>
      <HeadingElement1>Contributions Overtime</HeadingElement1>
      <BarChart width={400} height={200} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="x" stackId="a" fill="#192069" />
        <Bar dataKey="y" stackId="a" fill="#0914e0" />
        <Bar dataKey="z" stackId="a" fill="#6aa5d9" />
      </BarChart>
      <HeadingElement1>How do I compare to my peers?</HeadingElement1>
      <ParaElement>
        These numbers represent represent current goal achievement
      </ParaElement>
      <Peer>
        <WholeContainer>
          <HeadingElement1>
            Age:
            <span>
              <Select>
                <option value="" hidden>
                  under 30
                </option>
                <option value="1">under 40</option>
                <option value="2">under 50</option>
              </Select>
            </span>
            <HrElement />
          </HeadingElement1>
          <HeadingElement1>
            Salary:
            <Select>
              <option value="" hidden>
                k20-k30
              </option>
              <option value="1">k40-k50</option>
              <option value="2">k50-k60</option>
            </Select>
            <HrElement />
          </HeadingElement1>
          <HeadingElement1>
            Gender:
            <Select>
              <option value="" hidden>
                Male
              </option>
              <option value="1">Female</option>
              <option value="2">Trans</option>
            </Select>
            <HrElement />
          </HeadingElement1>
        </WholeContainer>

        <WholeContainer1>
          <WelcomeContainer style={{width: '12%', margin: '2%'}}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            <ParaElement>Average</ParaElement>
          </WelcomeContainer>
          <WelcomeContainer style={{width: '12%', margin: '2%'}}>
            <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
            <ParaElement>Top</ParaElement>
          </WelcomeContainer>
          <WelcomeContainer style={{width: '12%', margin: '2%'}}>
            <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
            <ParaElement>Me</ParaElement>
          </WelcomeContainer>
        </WholeContainer1>
      </Peer>
    </Container12>
    <Welcome1>
      <Welcome>
        <HeadingElement1>Retirement Strategy</HeadingElement1>
        <HeadingElement2>Employee contribution</HeadingElement2>
        <Line percent={12} strokeWidth={1} strokeColor="#0b48e0" />
        <HeadingElement2>Retirement Age</HeadingElement2>
        <Line percent={12} strokeWidth={1} strokeColor="#0b48e0" />
        <HeadingElement2>
          Employer Contribution <span>8.4%</span>
        </HeadingElement2>
        <HeadingElement2>
          Interest Rate <span>5%</span>
        </HeadingElement2>
        <ButtonElement>Update</ButtonElement>
        <ViewHelp>view help Docs</ViewHelp>
      </Welcome>
      <ExtraInfo>
        <Vr />
        <ExtraUpdate>
          <ParaElement>
            Are you considering a <span>Housing Advance?</span>
          </ParaElement>
          <ParaElement>Limited time reduced interest</ParaElement>
          <HeadingElement>Learn more</HeadingElement>
        </ExtraUpdate>
      </ExtraInfo>
    </Welcome1>
  </ContainerRetirement>
)

export default RetirementPage
