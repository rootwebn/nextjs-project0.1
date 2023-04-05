import Footer from './footer';

interface LayoutInter {
    children: React.ReactNode | React.ReactElement;
}

const Layout = ({ children }: LayoutInter) => {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}

export default Layout; 
