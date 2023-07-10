import React from "react";
import { Category } from "../../components/category/Category";
import { Order } from "../../components/hero/Order";
import { Slider } from "../../components/hero/Slider";
import { Product } from "../../components/product/Product";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { SignOut } from "../../contexts/authGoogle";
import { Header } from "../../components/header/Header";

export const Home = () => {
  const { user, signOut } = useContext(AuthGoogleContext);

  return (
    <>
      <Header />
      <Slider />
      <Order />
      <Category />
      <Product />
    </>
  );
};
