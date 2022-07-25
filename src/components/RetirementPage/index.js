import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts'
import {Line} from 'rc-progress'

import {AiFillHome} from 'react-icons/ai'
import {GiButterfly} from 'react-icons/gi'
import {BsPerson, BsSearch} from 'react-icons/bs'
import {FaRegNewspaper, FaRegListAlt} from 'react-icons/fa'
import {MdOutlineNotifications} from 'react-icons/md'
import {IoIosLogOut} from 'react-icons/io'

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
  <div className="container">
    <div className="Icons">
      <GiButterfly className="icons-spec" />
      <AiFillHome />
      <BsSearch />
      <FaRegNewspaper />
      <FaRegListAlt />
      <BsPerson />
      <MdOutlineNotifications />
      <IoIosLogOut />
    </div>

    <div className="home-container-details">
      <h1 className="HeadingElement2">Hi Mike,</h1>
      <p className="ParaElement">Welcome back,</p>

      <h1 className="HeadingElement2">Today</h1>
      <h1 className="HeadingElement1">$19,982</h1>
      <p className="ParaElement">Account Balance</p>
      <h1 className="HeadingElement1">$4,000</h1>
      <p className="ParaElement">year-to-Date Contributions</p>
      <h1 className="HeadingElement1">$1,982</h1>
      <p className="ParaElement">Total Interest</p>
      <button className="ButtonElement" type="button">
        {' '}
        I want to
      </button>

      <h1 className="HeadingElement2">Recent Transactions</h1>
      <p className="ParaElement">2020-08-07</p>
      <h1 className="HeadingElement1">Withdrawal Transfer to Bank-XX11</h1>
      <hr className="Hr" />
      <p className="ParaElement">2020-07-21</p>
      <h1 className="HeadingElement1">Withdrawal Transfer to Bank-XX11</h1>
      <hr className="Hr" />
      <p className="ParaElement">2020-07-16</p>
      <h1 className="HeadingElement1">Withdrawal Transfer to Bank-XX11</h1>
      <hr className="Hr" />
      <div className="Icons1">
        <AiFillHome />
        <FaRegNewspaper />
        <FaRegListAlt />
        <BsPerson />
        <BsSearch />
      </div>
    </div>
    <div className="ContainerRetirement">
      <div>
        <div className="mobile">
          <h1 className="HeadingElement">Retirement Income</h1>
          <h1 className="HeadingElement1">Starting Year 2056</h1>
          <div className="WholeContainer1">
            <div className="WelcomeContainer">
              <h1 className="HeadingElement2">$300,000</h1>
              <p className="ParaElement">My Goal</p>
              <hr className="HrEle" />
            </div>
            <div className="WelcomeContainer">
              <h1 className="HeadingElement2">59%</h1>
              <p className="ParaElement">Goal Achieved</p>
              <hr className="HrEle" />
            </div>
            <div className="WelcomeContainer">
              <h1 className="HeadingElement2">$300</h1>
              <p className="ParaElement">Est.Monthly Income</p>
              <hr className="HrEle" />
            </div>
          </div>
          <h1 className="HeadingElement1">Contributions Overtime</h1>
          <div className="Peer">
            <p className="ParaElement">Employer:k 73,500</p>
            <p className="ParaElement ">Employee:k 52,500</p>
            <p className="ParaElement">Total Interest:k 244,313</p>
          </div>

          <BarChart width={400} height={200} data={data}>
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="x" stackId="a" fill="#192069" />
            <Bar dataKey="y" stackId="a" fill="#0914e0" />
            <Bar dataKey="z" stackId="a" fill="#6aa5d9" />
          </BarChart>
        </div>
        <h1 className="HeadingElement1">How do I compare to my peers?</h1>
        <p className="ParaElement">
          These numbers represent represent current goal achievement
        </p>
        <div className="Peer">
          <div className="WholeContainer">
            <h1 className="HeadingElement1">
              Age:
              <span>
                <select>
                  <option value="" hidden>
                    under 30
                  </option>
                  <option value="1">under 40</option>
                  <option value="2">under 50</option>
                </select>
              </span>
              <hr className="HrElement" />
            </h1>
            <h1 className="HeadingElement1">
              Salary:
              <select>
                <option value="" hidden>
                  k20-k30
                </option>
                <option value="1">k40-k50</option>
                <option value="2">k50-k60</option>
              </select>
              <hr className="HrElement" />
            </h1>
            <h1 className="HeadingElement1">
              Gender:
              <select>
                <option value="" hidden>
                  Male
                </option>
                <option value="1">Female</option>
                <option value="2">Trans</option>
              </select>
              <hr className="HrElement" />
            </h1>
          </div>

          <div className="WholeContainer1">
            <div
              className="WelcomeContainer"
              style={{width: '12%', margin: '2%'}}
            >
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
              <p className="ParaElement">Average</p>
            </div>
            <div
              className="WelcomeContainer"
              style={{width: '12%', margin: '2%'}}
            >
              <CircularProgressbar
                value={percentage1}
                text={`${percentage1}%`}
              />
              <p className="ParaElement">Top</p>
            </div>
            <div
              className="WelcomeContainer"
              style={{width: '12%', margin: '2%'}}
            >
              <CircularProgressbar
                value={percentage2}
                text={`${percentage2}%`}
              />
              <p className="ParaElement">Me</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Welcome1">
        <div className="Welcome">
          <h1 className="HeadingElement1">Retirement Strategy</h1>
          <h1 className="HeadingElement2">Employee contribution</h1>
          <Line percent={12} strokeWidth={1} strokeColor="#0b48e0" />
          <h1 className="HeadingElement2">Retirement Age</h1>
          <Line percent={12} strokeWidth={1} strokeColor="#0b48e0" />
          <h1 className="HeadingElement2">
            Employer Contribution <span>8.4%</span>
          </h1>
          <h1 className="HeadingElement2">
            Interest Rate <span>5%</span>
          </h1>
          <button className="ButtonElement" type="button">
            Update
          </button>
          <p className="ViewHelp">view help Docs</p>
        </div>
        <div className="ExtraInfo">
          <hr className="Vr" />
          <div className="ExtraUpdate">
            <p className="ParaElement">
              Are you considering a <span>Housing Advance?</span>
            </p>
            <p className="ParaElement">Limited time reduced interest</p>
            <h1 className="HeadingElement">Learn more</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default RetirementPage
