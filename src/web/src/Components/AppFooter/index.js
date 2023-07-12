import {Typography} from 'antd';
import store from '../../Images/app-store.png';
import chplay from '../../Images/Chplay.png';
import comp from '../../Images/compliant.png';
import fb from '../../Images/facebook.png';
import tele from '../../Images/telephone.png';
import tou from '../../Images/terms-of-use.png';
function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456789">
        <img src={tele} alt="Logo" className="logo" />
        +123456789
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>
        <img src={store} alt="Logo" className="logo" />
        AppStore
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>
        <img src={chplay} alt="Logo" className="logo" />
        ChPlay
      </Typography.Link>
      <Typography.Link
        href="https://www.facebook.com/thuan0301/"
        target={'_blank'}>
        <img src={fb} alt="Logo" className="logo" />
        Facebook
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>
        <img src={comp} alt="Logo" className="logo" />
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>
        <img src={tou} alt="Logo" className="logo" />
        Terms of Use
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
