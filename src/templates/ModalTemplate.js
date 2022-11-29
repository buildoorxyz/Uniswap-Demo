import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import blueGift from '../assets/svg/blueGift.svg';
import { ReloadOutlined } from "@ant-design/icons";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 458,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  color: 'black',
  boxShadow: '0px 0px 16.8776px rgba(255, 160, 251, 0.5)',
  borderRadius: '16.8776px',
};

export default function ModalTemplate({ openModal, setOpenModal, setConfettiOpen }) {
  // // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={openModal}
        onClose={() => { setOpenModal(false); setConfettiOpen(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <ReloadOutlined /> */}
          <div style={{
            background: 'rgb(245, 255, 184)',
            filter: 'blur(52.7426px)',
            position: 'absolute',
            width: '272.15px',
            height: '206.15px',
            left: 'calc(50% - 272.15px/2 - 0px)',
            top: '10.68px',
            zIndex: '-1',
          }}>
          </div>
          <img src={blueGift} style={{
            height: ' 175.11px',
            width: ' 175.11px',
            zIndex: '2'
          }} />

          <div style={{ fontWeight: '700', fontSize: '29.3px', textAlign: 'center' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{
              fontFamily: 'Space Grotesk',
            }}>
              You have won 100 XPs! 🎉
            </Typography>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Space Grotesk', }}>
            Congratulations on your Uniswap exploration
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Space Grotesk', }}>
            Redeem XPs for NFTs, Tokens and Cool Schwags with these XPs exclusively on Buildoor!
          </Typography>
          <button style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12.6582px 26.3713px',
            gap: '4.22px',
            width: '385.37px',
            height: '65.4px',
            background: '#0A0B19',
            border: '1.05485px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 0px 21.097px rgba(0, 0, 0, 0.05)',
            borderRadius: '8.43882px',
            flex: 'none',
            order: '1',
            flexGrow: '0',
            color: 'white',
            cursor: 'pointer',
            marginTop: '5%',
            fontFamily: 'Space Grotesk',
          }} onClick={() => window.location = 'mailto:knock@buildoor.xyz'}>Share your feedback</button>
          <button style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12.6582px 26.3713px',
            gap: '4.22px',
            width: '385.37px',
            height: '65.4px',
            background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
            border: '1.05485px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 0px 21.097px rgba(0, 0, 0, 0.05)',
            borderRadius: '8.43882px',
            flex: 'none',
            order: '1',
            flexGrow: '0',
            color: 'white',
            cursor: 'pointer',
            marginTop: '5%',
            fontFamily: 'Space Grotesk',
          }} onClick={() => { window.location.reload() }}>Restart the Demo</button>
        </Box>
      </Modal>
    </div>
  );
}
