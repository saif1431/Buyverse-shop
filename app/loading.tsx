import Image from 'next/image';
import loader from './assets/loader.gif';


const LoaderPage = () => {
      return ( <div
      style={{
            display : 'flex',
            justifyContent : "center",
            alignItems : 'center',
            height: '100vh',
            width : "100vw"
      }}
      >
<Image src={loader} alt="loader" width={150} height={150}/>
      </div> );
}
 
export default LoaderPage;