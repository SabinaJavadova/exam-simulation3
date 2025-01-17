import React from 'react'
import {createContext,useState} from 'react'
export const wishlistContext = createContext(null);
const WishlistProvider = ({children}) => {
  const [wishList, setWishList] = useState([])
  console.log(wishList);


  const toggleWishlist = (clothes) => {
    const idx = wishList.findIndex((q) => q._id === clothes._id)
    if (idx === -1) {
      setWishList([...wishList, { ...clothes }])
    } else {
      setWishList([...wishList].filter((q) => q._id !== clothes._id))
    }
}
  
  return (
    <wishlistContext.Provider value={{wishList,toggleWishlist}}>{children}</wishlistContext.Provider>
  )
}

export default WishlistProvider