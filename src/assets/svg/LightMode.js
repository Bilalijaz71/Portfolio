const LightMode = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
        viewBox="0 0 24 24"
        style={{
          WebkitUserSelect: "auto",
          MozUserSelect: "auto",
          MsUserSelect: "auto",
          userSelect: "auto",
        }}
      >
        <path
          d="M8 12.25A4.25 4.25 0 0112.25 8v0a4.25 4.25 0 014.25 4.25v0a4.25 4.25 0 01-4.25 4.25v0A4.25 4.25 0 018 12.25v0z"
          style={{
            WebkitUserSelect: "auto",
            MozUserSelect: "auto",
            MsUserSelect: "auto",
            userSelect: "auto",
          }}
          fill="#F4F4F5"
          stroke="#71717A"
          strokeWidth="1.5"
        ></path>
        <path
          fill="none"
          stroke="#71717A"
          strokeWidth="1.5"
          d="M12.25 3v1.5m9.25 7.75H20m-1.209 6.541l-1.06-1.06m1.06-12.022l-1.06 1.06M12.25 20v1.5M4.5 12.25H3m3.77-5.48L5.709 5.709M6.77 17.73l-1.061 1.061"
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

export default LightMode;
