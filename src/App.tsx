import Header from './components/Header';
import Footer from './components/Footer';
import DockerContainerList from './components/DockerContainerList';
import { Container } from '@mui/material';
import CommandDialog from './components/CommandDialog';


function App() {
  return (
    <div className='app'>
      <Header />
      <Container maxWidth="lg">
        <CommandDialog />
        <DockerContainerList />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
