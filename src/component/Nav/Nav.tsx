import { FieldValues, useForm } from "react-hook-form";
import logo from "../../assets/logo.webp";
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { GameQuery } from "../../App";

interface Props {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  gameQuery: GameQuery;
  onSearch: (gameQuery: GameQuery) => void;
}

const Nav = ({ darkMode, onToggleDarkMode, gameQuery, onSearch }: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    // event.preventDefault();
    console.log("data", data);
    onSearch({ ...gameQuery, search: data.search });
  };

  return (
    <nav className="bg-transparent flex flex-row items-center py-6">
      {/* img container */}
      <div className="w-24">
        <img src={logo} alt="game hub logo" />
      </div>

      {/* ssearch Bar */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondary-light dark:bg-secondary-dark rounded-full py-4 px-6 space-x-4 mr-6 grow flex flex-row items-center"
      >
        <button type="submit" className="outline-none border-none">
          <FaSearch className="text-icon-light dark:text-bg-light" />
        </button>
        <input
          {...register("search", {
            required: true,
            minLength: 3,
            maxLength: 30,
          })}
          type="search"
          placeholder="Search games..."
          className="bg-transparent grow outline-none"
        />
      </form>

      {/* Dark mode toggle */}
      <label className="inline-flex items-center cursor-pointer scale-125">
        <input
          onChange={onToggleDarkMode}
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={darkMode ? true : false}
        />
        <div className="relative w-14 h-7 bg-secondary-light peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-btn-bg"></div>
      </label>
      <span className=" hidden min-[380px]:inline ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {darkMode ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
      </span>
    </nav>
  );
};

export default Nav;
