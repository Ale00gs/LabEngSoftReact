import Avatar from "./Avatar.js";
import "./profile.css";

function Card({ children }) {
  return <div className="class-card-exe3">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        person={{
          name: "SMILINGUIDO",
          image: "yfeOqp2",
        }}
        size={100}
      />
    </Card>
  );
}
