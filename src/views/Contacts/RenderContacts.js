import Staff from "../../views/Contacts/Staff";
import CurrentOfficeBearers from "../../views/Contacts/CurrentOfficeBearers";
import PreviousOfficeBearers from "../../views/Contacts/PreviousOfficeBearers";

export default function RenderContactsFromDropdown({ option }) {
  return (
    <>
      {option === "CURRENT OFFICE BEARERS" && <CurrentOfficeBearers year="2026-2027"/>}
      {option === "PREVIOUS OFFICE BEARERS" && <PreviousOfficeBearers />}
      {option === "STAFF" && <Staff />}
    </>
  );
}
