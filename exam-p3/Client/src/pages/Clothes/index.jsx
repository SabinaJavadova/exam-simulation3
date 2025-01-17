import React, { useContext, useState, useEffect } from "react";
import { BASE_URL } from "../../constant";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import style from "./index.module.scss";
import { CiHeart } from "react-icons/ci";
import { wishlistContext } from "../../context";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Clothes = () => {
  const [clothes, setClothes] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const { toggleWishlist } = useContext(wishlistContext);
  const navigate = useNavigate();

  const getClothes = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      setClothes(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  const sortClothes = (clothesArray) => {
    if (sortBy === "price") {
      return clothesArray.sort((a, b) => a.price - b.price);
    } else if (sortBy === "name") {
      return clothesArray.sort((a, b) => a.name.localeCompare(b.name));
    }
    return clothesArray;
  };

  const filteredClothes = clothes.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );


  const sortedFilteredClothes = sortClothes(filteredClothes);

  useEffect(() => {
    getClothes();
  }, []);

  return (
    <>
      <Helmet>
        <title>Clothes</title>
      </Helmet>

      <div className={style["container"]}>
        <div className={style["searching"]}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>

        <div className={style["cards"]}>
          <Grid container spacing={2}>
            {sortedFilteredClothes.length > 0 &&
              sortedFilteredClothes.map((clothesItem) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  key={clothesItem._id}
                  onClick={() => navigate(`/Detail/${clothesItem._id}`)} 
                >
                  <div className={style["card"]}>
                    <CiHeart
                      className={style["ikon"]}
                      onClick={(e) => {
                        e.stopPropagation(); 
                        toggleWishlist(clothesItem);
                      }}
                    />
                    {clothesItem.img && <img src={clothesItem.img} alt={clothesItem.name} />}
                    <h3 className={style["name"]}>{clothesItem.name}</h3>
                    <p>${clothesItem.price}</p>
                  </div>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Clothes;
