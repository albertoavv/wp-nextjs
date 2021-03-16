import { Header } from './header'

export const Layout = ( {data, children} ) => {

    return (
        <div>
            <Header headerMenus={data?.menus?.headerMenus} />
            {children}
        </div>
    )
}
