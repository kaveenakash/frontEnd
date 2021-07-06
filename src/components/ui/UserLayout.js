import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
const UserLayout = ({children}) => {
    const [value, setValue] = useState(0);
    return (
        <div>
        <Header value={value} setValue={setValue}/>
        {children}  
        <Footer value={value} setValue={setValue}/>
        </div>
    )
}

export default UserLayout;
