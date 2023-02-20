import Header from './components/Header';
import Footer from './components/Footer';
import DockerContainerList from './components/DockerContainerList';
import { Container } from '@mui/material';
import CommandDialog from './components/CommandDialog';
import DockerContainerDialog from './components/DockerContainerDialog';
import { DockerContainerDialogMode } from './utils/DockerContainerUtils';


function App() {
  return (
    <div className='app'>
      <Header />
      <Container maxWidth="lg">
        <CommandDialog />
        <DockerContainerList />
        <DockerContainerDialog mode={DockerContainerDialogMode.CREATE}/>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
