import Footer from './Components/Footer';
import { ThemeProvider } from 'styled-components';
import { Globalstyle } from './Components/Globalstyle';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Whyus from './Components/Services/Whyus';

function App() {
  const theme={
    colors:{
      maincolor:"#3CB371",
      helperGreenBlack:"#2F4F4F",
      footerdark:"#303030",
      footerlight:"#474846",
      textwhite:"#fff",
      MediumBlue:"#0000CD",
      DarkBlue:"#00008B"
      
         },
    font:{
h1:"4rem",
p:"1.8rem",
h1_778:"3rem",
p_778:"1.8rem"
    },
    media:{mobile:"768px", tab:"998px"},
      
  }
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle/>
      <Header/>
      <Home />
      <Whyus/>
      <Services/>
      <About/>
      <Contact/>
    <Footer/>
    </ThemeProvider>
  );
}

export default App;
