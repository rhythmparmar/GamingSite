import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

function App() {

  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Post />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;