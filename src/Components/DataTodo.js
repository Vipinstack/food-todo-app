import "./DataTodoCss.css";
import Data from "./Data";
import AdjustOutlinedIcon from "@material-ui/icons/AdjustOutlined";
import Button from "@material-ui/core/Button";
import Bottom from "./Bottom";
import Menu from "./Menu";

const DataTodo = () => {
  return (
    <div>
      <div className="Container">
        {Data.map((user) => (
          <div className="Wrapper">
            <span>
              <AdjustOutlinedIcon
                style={{ marginRight: "1rem", color: "green",position:"absolute",left:".4rem",top:".3rem" }}
              />
            </span>
            <span className="Name">{user.name}</span>
            <div className="Prize">{user.prize}</div>
            <span>
              <Button
                variant="contained"
                color="secondary"
                className="Button"
               >
                Add
              </Button>
            </span>
          </div>
        ))}
      </div>
        <Bottom />
        <Menu />
    </div>
  );
};

export default DataTodo;
