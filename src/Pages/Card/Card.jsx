import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Wordcard from '../Components/Wordcard'

export default function Cards() {
    return (
        <>
            <Header />
            <Wordcard word={'abdomen'} transcription={'[ˈæbdəmən]'} translate={'живот'} />
            <Footer />
        </>
    )
}
