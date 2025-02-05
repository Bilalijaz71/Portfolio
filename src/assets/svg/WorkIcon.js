const WorkIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-6 w-6 flex-none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#F4F4F5"
          fillOpacity="0.1"
          stroke="#71717A"
          strokeWidth="1.5"
          d="M2.75 9.75a3 3 0 013-3h12.5a3 3 0 013 3v8.5a3 3 0 01-3 3H5.75a3 3 0 01-3-3v-8.5z"
          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        ></path>
        <path
          stroke="#71717A"
          strokeWidth="1.5"
          d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 001.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 012-2h2.5a2 2 0 012 2V6.5"
          className="stroke-zinc-400 dark:stroke-zinc-500"
        ></path>
      </svg>
    </>
  );
};

export default WorkIcon;
