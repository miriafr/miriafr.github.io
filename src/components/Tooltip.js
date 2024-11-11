import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import LeoImg from '../assets/img/leo-image.jpeg'
function LeoTooltip(){
  const renderTooltip = (props) => (
    <Tooltip id="tooltip" {...props} className='tooltip'>
      <img src={LeoImg} alt="my dog" className="thumbnail"></img><br/>
      This is Leo. He's a very good boy. 
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 250 }}
      overlay={renderTooltip}
    >
        <u>my dog, Leo</u>
    </OverlayTrigger>
  );
}
export default LeoTooltip;