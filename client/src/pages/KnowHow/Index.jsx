import { Stack, Box } from "@mui/material";
import Appbar from "../../components/appbar";
import SingleKnowHow from "./SingleKnowHow";
//import CategoryMenu from "./CategoryMenu";
import Footer from "../../components/footer/Footer";

export default function Exchanges() {
  return (
    <Box>
      <Appbar />
     
        {/* <CategoryMenu /> */}
        <SingleKnowHow />

      <Footer />
    </Box>
  );
}
