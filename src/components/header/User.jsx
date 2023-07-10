import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { SignOut } from "../../contexts/authGoogle";

export const User = () => {
  const { user, signOut } = useContext(AuthGoogleContext);

  console.log(user);

  // const user = true;
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(null);
  };

  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    dispatch(authActions.logout());
  };
  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img src={user.photoURL} alt="" />
            </button>

            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <div className="image">
                  <Link to="/account">
                    <div className="img">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </Link>
                  <div className="text">
                    <h4>{user.displayName}</h4>
                    <label htmlFor="">Brasilia,DF</label>
                  </div>
                </div>
                {/* <Link to="/login">
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>Minha Conta</h4>
                  </button>
                </Link> */}
                {/* <button className="box">
                  <BsBagCheck className="icon" />
                  <h4>Meus Pedidos</h4>
                </button> */}
                {/* <button className="box">
                  <AiOutlineHeart className="icon" />
                  <h4>Favoritos</h4>
                </button> */}
                {/* <button className="box">
                  <GrHelp className="icon" />
                  <h4>Ajuda</h4>
                </button> */}
                <button
                  className="box"
                  onClick={() => {
                    logoutHandler();
                    signOut();
                  }}
                >
                  <BiLogOut className="icon" />
                  <button>Sair</button>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>Minha Conta</button>
        )}
      </div>
    </>
  );
};
