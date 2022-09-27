import {
  ListItemText,
  Stack,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppbarContainer,
  MyList,
  LogoImage,
} from "../../styles/appbar";
import Actions from "./Actions";
import "@fontsource/poppins";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {useNavigate } from 'react-router-dom';

export default function AppbarDesktop({ matches }) {
  const navigate = useNavigate();
  const navigateToUploadProduct = () => {
    navigate('/uploadProduct');
  }
  return (
    <AppbarContainer>
      <LogoImage src="./images/banner/2.png" alt="logo-Ayni" />
      {/* <AppbarHeader>Ayni</AppbarHeader>*/}

      <MyList
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        {/* <ListItemText primary ="Home" />            */}

        <AddCircleOutlineIcon sx={{ paddingRight: "0.5em" }} onClick={navigateToUploadProduct}/>

        <ListItemText primary="Agregar trueque" onClick={navigateToUploadProduct} />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Stack direction="row" spacing={2} justify-></Stack>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
