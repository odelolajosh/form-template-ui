import { SearchIcon } from "../../assets/svg";
import { Input } from "../../styles";
import Select from "../select";
import { FilterSection, SearchBox, TopbarWrapper } from "./TopBar.style";

const ORDER = [
  "Default", "Ascending", "Descending"
]

const DATE = [
  "Default", "Ascending", "Descending"
]

const CATEGORY = [
  "All", "Education", "E-commerce", "Health"
]


const Topbar = () => (
  <TopbarWrapper>
    <SearchBox>
      <Input placeholder="Search Templates" />
      <span><SearchIcon /></span>
    </SearchBox>
    <FilterSection>
      <span>Sort By: </span>
      <Select label='category' items={CATEGORY} />
      <Select label='order' items={ORDER} />
      <Select label='date' items={DATE} />
    </FilterSection>
  </TopbarWrapper>
)

export default Topbar;