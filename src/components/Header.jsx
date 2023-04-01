import headerStyles from "@/styles/Header.module.css";

function Header() {
  //   const x = 5;
  return (
    <div className={headerStyles.description}>
      <h1>
        <span>WebDev</span> News
      </h1>
      <p>Keep up to date with dev news</p>

      {/* Conditonal styling */}
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
    </div>
  );
}

export default Header;
