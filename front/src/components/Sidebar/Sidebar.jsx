import "./Sidebar.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import AppleIcon from "@mui/icons-material/Apple";
import FitbitIcon from "@mui/icons-material/Fitbit";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useLoginContext } from "../../context/LoginContext";
import BackupTableIcon from '@mui/icons-material/BackupTable';
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Sidebar = () => {

  const [open, setOpen] = useState(false);
  const { user, isLogin } = useLoginContext();

  useEffect(() => {
    const dataFetch = async () => { await isLogin() }; dataFetch();
  }, [user.update]);

  const toggle = () => setOpen(!open);
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 100 }}
      animate={{ width: open ? "250px" : "50px" }}
      className="sidebar"
    >
      <div className="sidebar-container">

        <div
          style={{ alignSelf: open ? "inherit" : "center" }}
          className="menu-icon"
          onClick={toggle}
        >
          <MenuIcon />
        </div>

        <div className="profile">
          <img
            style={{ width: open ? "50px" : "30px", height: open ? "50px" : "30px", }}
            src="logo.png" alt="profile image"
          />
          <div className="profile-info">
            {open && (
              <>
                <p>Hola!!!</p>
                <h1>{user.data.name} {user.data.lastName}</h1>
              </>
            )}
          </div>
        </div>

        <hr className="horizontal-line" />

        <div className="menu">
          {open && <h2>Menu</h2>}

          <div style={{ pointerEvents: open ? "inherit" : "none" }} className="menu-container">

            <Link to={'/'} className="menu-item" onClick={toggle}>
              <HomeIcon />{open && <p>Menu principal</p>}
            </Link>

            <Link to={'/updateuser'} onClick={toggle} className="menu-item">
              <PeopleAltIcon />{open && <p>Datos de Usuario</p>}
            </Link>

            <Link to={'/orderuser'} onClick={toggle} className="menu-item">
              <LocalShippingIcon /> {open && <p>Ver tus pedidos</p>}
            </Link>

            <div className="menu-item">
              <TrackChangesIcon />
              {open && <p>Target</p>}
            </div>

            {user.data && user.data.role === 'admin' &&
              <Link to={'/console'} className="menu-item" onClick={toggle}>
                <BackupTableIcon />
                {open && <p>Consola</p>}
              </Link>
            }

          </div>
        </div>
        <hr className="horizontal-line" />

        <div className="sync-data">
          {open && <h2>Sync Data</h2>}
          <div
            style={{
              pointerEvents: open ? "inherit" : "none",
              background: open ? "rgba(0,0,0, 0.1)" : "transparent",
            }}
            className="sync-container"
          >
            <div className="menu-item">
              <FavoriteIcon />
              {open && <p>Google Fit</p>}
            </div>
            <div className="menu-item">
              <AppleIcon />
              {open && <p>Apple Watch</p>}
            </div>
            <div className="menu-item">
              <FitbitIcon />
              {open && <p>Fitbit Activity</p>}
            </div>
            <div className="menu-item">
              <SettingsIcon />
              {open && <p>Settings</p>}
            </div>
          </div>
        </div>

        <div className="dark-theme">
          <div className="theme-container">
            <div className="menu-item">
              <DarkModeIcon />
              {open && <p>Lights Off</p>}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
