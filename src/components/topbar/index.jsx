import { SearchIcon } from "../../assets/svg";
import { Input } from "../../styles";
import { SearchBox, TopbarWrapper } from "./TopBar.style";


const Topbar = () => (
  <TopbarWrapper>
    <SearchBox>
      <Input placeholder="Search Templates" />
      <span><SearchIcon /></span>
    </SearchBox>
  </TopbarWrapper>
)

export default Topbar;