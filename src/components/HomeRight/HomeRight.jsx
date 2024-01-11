import { Card } from "@mui/material";
import SearchUser from "../SearchUser/SearchUser";
import PopularUserCard from "./PopularUserCard";
const popularUsers = [1, 1, 1, 1, 1, 1];
const HomeRight = () => {
  return (
    <div className="pr-2 mt-10">
      <SearchUser />

      <Card>
        <div className="flex justify-between p-5 items-center">
          <p className="font-semibold opacity-70">Suggestion for you</p>
          <p className="text-sl cursor-pointer font-semibold opacity-95">
            View All
          </p>
        </div>
        {popularUsers.map((item, index) => {
          return <PopularUserCard key={index} />;
        })}
      </Card>
    </div>
  );
};

export default HomeRight;
