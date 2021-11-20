import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header/Header';
import CTA from '../components/CTA/CTA';
import Tracker from '../components/Tracker/Tracker';
import About from '../components/About/About';
import SelectionModal from '../components/SelectionModal/SelectionModal';

export default function Home() {
    return (
        <div className='overlay'>
            <Head>
                <title>Frontend Mentor | Crowdfunding product page</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='./images/favicon-32x32.png'
                />
            </Head>
            <Header />
            <CTA />
            <Tracker />
            <About />
            <SelectionModal />
        </div>
    );
}
