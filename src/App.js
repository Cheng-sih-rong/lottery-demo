import "./App.scss";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import list from "../src/list.js";
import { useState, useRef } from "react";

function App() {
  const [isDefault, setIsDefault] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [counters] = useState(Object.keys(list));
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
        console.log();
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
    width: 100,
    height: 40,
    fontSize: 12,
    marginLeft:2
  };

  return (
    <>
    <div className="h-[100vh - 20px]">
      <div className="App flex justify-center mt-5 ">
        <Box
          height={"80vh"}
          width={"60vw"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={10}
          p={"auto"}
          sx={{ border: "2px solid grey" }}
        >
          {isDefault ? (
            <p className="text-[40px]">生日好禮抽抽抽</p>
          ) : (
            <img
              className="max-h-[100%] w-auto"
              src={require(`../public/photo/${num}.jpg`)}
              alt={num}
            />
          )}
        </Box>

        <div className="w-[30vw] my-auto">
          {" "}
          <p className="text-[24px] ml-2">
            {!isActive && !isDefault ? `恭喜${list[num]}!` : " "}
          </p>
          {!isActive && isDefault ? (
            <Button
              variant="contained"
              onClick={start}
              size="medium"
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
      <div className="flex gap-3 mt-4 mx-auto justify-center ">
        {counters.map(function (object, i) {
          return (
            <Box
              key={i}
              height={"30px"}
              width={"30px"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={"auto"}
              sx={{
                border: "1px solid orange",
                backgroundColor: num === i + 1 && !isDefault ? "orange" : "",
              }}
            >
              <img
                className="max-h-[100%] w-auto"
                src={require(`../public/photo/${i + 1}.jpg`)}
                alt={i }
              />
            </Box>
          );
        })}
      </div>
      </div>
    </>

  );
}

export default App;
