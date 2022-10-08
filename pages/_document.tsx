import { Html, Head, Main, NextScript } from 'next/document'
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Footer from '../components/footer/Footer';
import { Header } from '../components';

export default function Document() {
	return (
		<Html className="scroll-smooth">
			<Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,800;1,800&family=Roboto&family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
			</Head>
			<body className='flex flex-col h-screen justify-between border'>
				<Main />
				<NextScript />
				<Footer />
        <script defer type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBoBBvzxlRlkbfYzZcHp8ALOwBk3YjfB-I&libraries=places"></script>
			</body>
		</Html>
	)
}
