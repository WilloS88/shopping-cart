import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { setWeaponType, setCaliber } from "../../state/filter/filterSlice";

export const FilterSection = () => {
  const dispatch = useDispatch();
  const { weaponType, caliber } = useSelector(
    (state: RootState) => state.filter
  );

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setWeaponType(event.target.value));
  };

  const handleCaliberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCaliber(event.target.value));
  };

  return (
    <div className="flex justify-center mt-5 text-xl gap-5">
      <label htmlFor="type">Weapon Type:</label>
      <select
        id="type"
        value={weaponType}
        className="font-semibold"
        onChange={handleTypeChange}
      >
        <option value="">All</option>
        <option value="Assault Rifle">AR</option>
        <option value="Submachine Gun">SMG</option>
        <option value="Pistol">Pistol</option>
      </select>

      <label htmlFor="caliber">Caliber:</label>
      <select
        id="caliber"
        value={caliber}
        className="font-semibold"
        onChange={handleCaliberChange}
      >
        <option value="">All</option>
        <option value="9mm">9mm</option>
        <option value=".45 ACP">.45 ACP</option>
        <option value=".357 Magnum">.357 Magnum</option>
        <option value="5.56x45mm NATO">5.56mm</option>
        <option value="7.62x39mm">7.62mm</option>
      </select>
    </div>
  );
};
