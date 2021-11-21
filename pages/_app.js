import '../styles/reset.css';
import '../styles/globals.css';
import { ContextWrapper } from '../util/ModalContext';

function MyApp({ Component, pageProps }) {
    return (
        <ContextWrapper>
            <Component {...pageProps} />
        </ContextWrapper>
    );
}

export default MyApp;
