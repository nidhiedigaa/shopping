import React from 'react'

function Cartdrawer() {
    const [drawerOpen,setDrawerOpen]=useState(false)
    const toggleCartDrawer=()=>
    {
        setDrawerOpen(!drawerOpen)
    }
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:1/4 h-full bg-white shadow-lg tarnsform 
      transition-transform duration-300 flex flex-col z-50 ${drawerOpen?"translate-x-0":"translate-x-full"}`}>Cartdrawer</div>
  )
}

export default Cartdrawer