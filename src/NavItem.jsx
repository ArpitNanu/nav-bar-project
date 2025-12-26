const Navitem = ({ icon: Icon, Description, isCollapsed }) => {
  return (
    <ul className="">
      <a
        href="#"
        className=" group flex gap-2 m-3 p-3 focus:bg-[hsl(var(--primary-focus))] rounded-xl cursor-pointer"
      >
        <Icon className="group-focus:text-white" />

        {!isCollapsed && (
          <span className="group-focus:text-white">{Description}</span>
        )}
      </a>
    </ul>
  );
};
export default Navitem;
