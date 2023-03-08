import React from "react";

const Header = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        maxHeight: "800px",
        margin: "20px auto 50px",
        //네 면의 여백에 대한 단축속성
        //margin: "상하 좌우"
        //margin: "상 좌우 하"
      }}
    >
      <div
        style={{
          display: "flex",
          height: "60px",
          borderRadius: "4px",
          backgroundColor: "rgb(186, 186, 186)",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
          marginBottom: "15px",
          fontWeight: "700",
        }}
      >
        <div style={{ fontSize: "20px" }}>TO DO LIST</div>
        <div style={{ fontSize: "15px" }}>with React-Redux</div>
      </div>
    </div>
  );
};

export default Header;
