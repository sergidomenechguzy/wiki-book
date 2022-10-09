import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="form-control">
      <div className="input-group justify-center">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered w-full max-w-lg"
        />
        <button className="btn btn-square">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Search;
