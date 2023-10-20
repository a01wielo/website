import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import React from 'react'
import './App.css'
import Content from './components/content/Content'
import Nav from './components/header/Nav'

function App() {

  return (
    <>
      <Nav></Nav>
      <Content></Content>
    </>
  )
}

export default App
