import {AiFillHome} from 'react-icons/ai'
import {GiButterfly} from 'react-icons/gi'
import {BsPerson} from 'react-icons/bs'
import {FaRegNewspaper, FaRegListAlt} from 'react-icons/fa'
import {MdOutlineNotifications} from 'react-icons/md'
import {IoIosLogOut} from 'react-icons/io'

import RetirementPage from '../RetirementPage'

import {
  Container,
  WelcomeContainer,
  HeadingElement,
  ParaElement,
  ButtonElement,
  HeadingElement1,
  HeadingElement2,
  Image,
  Icons,
  Intro,
  Hr,
} from './styledComponents'

import './index.css'

const url =
  'https://www.freepik.com/free-photo/guy-thinks-about-something-while-work_7607666.htm'

const HomePage = () => (
  <Container>
    <Icons>
      <GiButterfly className="icons-spec" />
      <AiFillHome />
      <FaRegNewspaper />
      <FaRegListAlt />
      <BsPerson />
      <MdOutlineNotifications />
      <IoIosLogOut />
    </Icons>

    <WelcomeContainer>
      <Intro>
        <Image src={url} />

        <Icons>
          <HeadingElement>Hi Mike,</HeadingElement>
          <ParaElement>Welcome back,</ParaElement>
        </Icons>
      </Intro>

      <HeadingElement>Today</HeadingElement>
      <HeadingElement>$19,982</HeadingElement>
      <ParaElement>Account Balance</ParaElement>
      <HeadingElement1>$4,000</HeadingElement1>
      <ParaElement>year-to-Date Contributions</ParaElement>
      <HeadingElement1>$1,982</HeadingElement1>
      <ParaElement>Total Interest</ParaElement>
      <ButtonElement> I want to</ButtonElement>

      <HeadingElement2>Recent Transactions</HeadingElement2>
      <ParaElement>2020-08-07</ParaElement>
      <HeadingElement1>Withdrawal Transfer to Bank-XX11</HeadingElement1>
      <Hr />
      <ParaElement>2020-07-21</ParaElement>
      <HeadingElement1>Withdrawal Transfer to Bank-XX11</HeadingElement1>
      <Hr />
      <ParaElement>2020-07-16</ParaElement>
      <HeadingElement1>Withdrawal Transfer to Bank-XX11</HeadingElement1>
      <Hr />
    </WelcomeContainer>
    <RetirementPage />
  </Container>
)

export default HomePage
