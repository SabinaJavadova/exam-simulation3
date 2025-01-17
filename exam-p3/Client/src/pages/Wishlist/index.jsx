import React, { useContext } from "react";
import style from "./index.module.scss";
import { wishlistContext } from "../../context";
import Grid from "@mui/material/Grid2";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useContext(wishlistContext);

  return (
    <>
      <div className={style["container"]}>
        <Grid container spacing={2}>
          {wishlist.length > 0 &&
            wishlist.map((c) => (
              <Grid item xs={12} md={6} lg={4} key={c._id}>
                <div>
                  <FaHeart />
                  {c.img && <img src={c.img} alt={c.name} />}
                  <h3>{c.name}</h3>
                  <p>${c.price}</p>
                  <div>
                    <FaHeart onClick={() => { toggleWishlist(c) }} />
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default Wishlist;
