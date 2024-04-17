import "./App.scss";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import list from "../src/list.js";
import { useState, useRef } from "react";

function App() {
  const [isDefault, setIsDefault] = useState(true);
  const [isActive, setIsActive] = useState(false);
  // const length = useRef(Object.keys(list).length);
  // const listLength = Object.keys(list).length;
  const [num, setNum] = useState(1);

  function random() {
    const listLength = Object.keys(list).length;
    setInterval(() => {
      setNum((prevNum) => {
        if (prevNum >= listLength) {
          return 1;
        } else {
          return prevNum + 1;
        }
      });
    }, 200);
  }

  function start() {
    setIsDefault(false);
    setIsActive(true);
    random();
  }

  return (
    <>
      <div className="App flex-col align-middle">
        {isDefault ? (
          <Box
            className="mx-auto"
            height={"60vh"}
            width={"60vh"}
            my={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={10}
            p={"auto"}
            sx={{ border: "2px solid grey" }}
          >
            <p className="text-[50px]">生日好禮抽抽抽</p>
          </Box>
        ) : (
          // <div className="h-[60vh]  h-96 bg-[red] mx-auto my-4 p-[70px]">
          //   生日好禮抽抽抽
          // </div>
          <Box
            className="mx-auto"
            height={"60vh"}
            width={"60vh"}
            my={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={10}
            p={"auto"}
            sx={{ border: "2px solid grey" }}
          >
            <img
              className="max-h-[100%] w-auto"
              src={process.env.PUBLIC_URL + `/photo/${num}.jpg`}
              alt={num}
            />
          </Box>
          // <div className=" w-[500px] h-[60vh] bg-[red] mx-auto my-4 flex-col content-between">
          //   <div>
          //     <img
          //       width="100%"
          //       src={process.env.PUBLIC_URL + `/photo/${num}.jpg`}
          //       alt={num}
          //     />
          //   </div>
          //   <p>{list[num]}</p>
          // </div>
        )}
        {!isActive ? (
          <Button variant="contained" onClick={start} size="large">
            開始抽獎
          </Button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
