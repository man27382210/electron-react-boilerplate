import React, { useState } from 'react';
import { Email as EmailIcon } from '@styled-icons/evaicons-solid';
import { Calendar as CalendarIcon } from '@styled-icons/boxicons-regular';
import styled from 'styled-components';
import Mail from './Mail';
import Calendar from './Calendar';
import Div from './components/Div';
import './App.global.css';

interface HeaderProps {
  currentIndex: number;
  setIndex: (value: number) => void;
}

const Header = (props: HeaderProps) => {
  const Ul = styled.ul`
    background-color: white;
    flex-direction: column;
    width: 5vw;
    height: 100vh;
    grid-area: leftPanel;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  `;
  const Button = styled.button`
    background-color: ${(propsUse: { active: boolean }) =>
      propsUse.active ? '#ececec' : 'white'};
    height: 50px;
    width: 5vw;
    border-radius: 0;
    border-bottom: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const EmailIconElement = styled(EmailIcon)`
    height: 32px;
    width: 32px;
  `;

  const CalendarIconElement = styled(CalendarIcon)`
    height: 32px;
    width: 32px;
  `;

  const MailLi = (propsUse: { onClick: () => void; active: boolean }) => {
    const { onClick, active } = propsUse;
    return (
      <Button onClick={onClick} active={active}>
        <EmailIconElement height={32} width={32} />
      </Button>
    );
  };

  const CalendarLi = (propsUse: { onClick: () => void; active: boolean }) => {
    const { onClick, active } = propsUse;
    return (
      <Button onClick={onClick} active={active}>
        <CalendarIconElement />
      </Button>
    );
  };

  const { setIndex, currentIndex } = props;

  return (
    <Ul>
      <MailLi
        onClick={() => {
          setIndex(0);
        }}
        active={currentIndex === 0}
      />
      <CalendarLi
        onClick={() => {
          setIndex(1);
        }}
        active={currentIndex === 1}
      />
    </Ul>
  );
};

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Header setIndex={setIndex} currentIndex={index} />
      <Div display={index === 0}>
        <Mail />
      </Div>
      <Div display={index === 1}>
        <Calendar />
      </Div>
    </>
  );
}
