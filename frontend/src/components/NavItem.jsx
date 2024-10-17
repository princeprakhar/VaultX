const NavItem = ({ href, name, icon: Icon }) => {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
    >
      <Icon className="h-5 w-5 mr-1" />
      {name}
    </a>
  );
};

export default NavItem;