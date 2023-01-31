import React from 'react'
import { IconContext } from 'react-icons/lib'
import { IoMailOutline, IoChevronForward, IoApps, IoNotifications,IoPieChart, IoNewspaper, IoCard, IoColorFill, IoChevronForwardCircle } from 'react-icons/io5'

function Card() {
  return (
    <div className='service_container'>
        <div className='title_wrapper'>
            <span className='service_title'>Our Services</span>
            <h2>Save Time Lorem ipsum dolor sit amet<br/> for your business</h2>
        </div>
        <div className='service_card'>
            <div className='card'>
                <span className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                        {/* <IoChevronForwardCircle/> */}
                        <IoMailOutline/>
                    </IconContext.Provider>
                </span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </div>

            <div className='card'>
                <span className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                        {/* <IoChevronForwardCircle/> */}
                        <IoApps/>
                    </IconContext.Provider>
                </span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                    <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </div>

            <div className='card'>
                <span className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                        {/* <IoChevronForwardCircle/> */}
                        <IoNotifications/>
                    </IconContext.Provider>
                </span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </div>


            <div className='card'>
                <span className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                        {/* <IoChevronForwardCircle/> */}
                        <IoPieChart/>
                    </IconContext.Provider>
                </span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </div>

            
            <div className='card'>
                <span className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                        {/* <IoChevronForwardCircle/> */}
                        <IoColorFill/>
                    </IconContext.Provider>
                </span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </div>

            
            <div className='card'>
                <span className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                        {/* <IoChevronForwardCircle/> */}
                        <IoNewspaper/>
                    </IconContext.Provider>
                </span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </div>

            
            <div className='card'>
                <span className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                        <IoCard/>
                    </IconContext.Provider>
                </span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </div>

            
            <div className='card'>
                <span className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                        <IoMailOutline/>
                    </IconContext.Provider>
                </span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </div>

        </div>
    
    </div>
  )
}

export default Card