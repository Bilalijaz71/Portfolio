import React from "react";

const DarkModeIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        aria-hidden="true"
        className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
        viewBox="0 0 24 24"
        style={{
          WebkitUserSelect: "auto",
          MozUserSelect: "auto",
          MsUserSelect: "auto",
          userSelect: "auto",
        }}
      >
        <path
          fill="#2DD4BF"
          fillOpacity="0.1"
          stroke="#14B8A6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.25 16.22a6.937 6.937 0 01-9.47-9.47 7.451 7.451 0 109.47 9.47zM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7z"
          style={{
            WebkitUserSelect: "auto",
            MozUserSelect: "auto",
            MsUserSelect: "auto",
            userSelect: "auto",
          }}
        ></path>
      </svg>
    </>
  );
};

export default DarkModeIcon;
