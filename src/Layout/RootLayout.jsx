import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
       <>
        <div>
            Hello root lay out 
            
        </div>
        <Outlet/>
        </>
    );
};

export default RootLayout;