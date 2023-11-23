import { getImageUrl } from "./Utils.js";
import "./avatar.css";

export default function Avatar({ person }) {
  return (
    <div className="align-avatar-exe3">
      <img
        className="avatar-exe3"
        src={getImageUrl(person)}
        alt={person.name}
        // width={size}
        // height={size}
      />
    </div>
  );
}
