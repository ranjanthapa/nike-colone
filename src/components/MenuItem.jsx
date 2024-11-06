/* eslint-disable react/prop-types */
import { navLinks } from "../constants";

const MenuItem = ({ menuClass }) => {
  return (
    <ul className={menuClass}>
      {navLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="font-montserrat leading-normal-text-lg text-slate-gray"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
