import { Header } from './header'
import Footer from './footer'

export const Layout = ( {data, children} ) => {

    //console.log('data', data);
    
    return (
        <div>
            <Header header={data?.header} headerMenus={data?.menus?.headerMenus} />
            {children}
            <Footer footer={data?.footer} footerMenus={data?.menus?.footerMenus} />
        </div>
    )
}
