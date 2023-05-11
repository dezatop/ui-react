import { useToggle } from './hooks/useToggle.jsx';
import RButton from './components/UI/RButton/RButton.jsx';
import RModal from './components/UI/RModal/index.jsx';

const txtLorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur dolorum nostrum nulla quidem sequi? Alias deleniti earum
            illum ipsam iure laudantium mollitia nihil, numquam praesentium,
            quam quas repellat suscipit vitae.`;

function App() {
  const [openModal, setOpenModal] = useToggle();

  return (
    <div style={{ padding: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>Clear React App</h1>
      <RButton onClick={setOpenModal}>Modal Create Portal</RButton>

      {/*Create Portal Modal*/}
      <RModal open={openModal} onClose={setOpenModal}>
        <p>{txtLorem}</p>
      </RModal>
      {/*Create Portal Modal*/}
    </div>
  );
}

export default App;

