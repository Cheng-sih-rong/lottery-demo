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

  // function random() {
  //   const listLength = Object.keys(list).length;
  //   setInterval(() => {
  //     setNum((prevNum) => {
  //       return Math.floor(Math.random() * listLength) + 1;
  //       // if (prevNum >= listLength) {
  //       //   return 1;
  //       // } else {
  //       //   return prevNum + 1;
  //       // }
  //     });
  //   }, 100);
  // }

  const intervalRef = useRef(null); // 用于存储 setInterval 的引用

  function random() {
    const listLength = Object.keys(list).length;
    intervalRef.current = setInterval(() => {
      setNum((prevNum) => {
        return Math.floor(Math.random() * listLength) + 1;
      });
    }, 100);
  }

  function stop() {
    setIsActive(false);
    clearInterval(intervalRef.current); // 清除定时器
  }

  function start() {
    setIsDefault(false);
    setIsActive(true);
    random();
    setTimeout(() => {
      stop();
    }, 8000);
  }

  function restart() {
    setIsDefault(true);
  }

  const buttonSx = {
    marginTop: 3,
    width: 200,
    height: 60,
    fontSize: 24,
  };

  return (
    <>
      <div className="App flex justify-center mt-7">
        <Box
          height={"90vh"}
          width={"80vh"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={10}
          p={"auto"}
          sx={{ border: "2px solid grey" }}
        >
          {isDefault ? (
            <p className="text-[50px]">生日好禮抽抽抽</p>
          ) : (
            <img
              className="max-h-[100%] w-auto"
              src={require(`../public/photo/${num}.jpg`)}
              alt={num}
            />
          )}
        </Box>

        <div className="w-[20vw] my-auto">
          {" "}
          <p className="text-[45px] ml-2">
            {!isActive && !isDefault ? `恭喜${list[num]}!` : " "}
          </p>
          {!isActive && isDefault ? (
            <Button
              variant="contained"
              onClick={start}
              size="large"
              sx={buttonSx}
            >
              開始抽獎
            </Button>
          ) : (
            ""
          )}
          {!isActive && !isDefault ? (
            <Button
              variant="contained"
              onClick={restart}
              size="large"
              sx={buttonSx}
            >
              重新開始
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
