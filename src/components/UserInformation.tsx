interface Props {
  name: string;
  image: string;
}

function UserInformation(props: Props): JSX.Element {
  const { name, image } = props;

  return (
    <div className="user-information">
      <button type="button">
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <img
        className="profile-picture mx-1"
        src={image}
        alt={`${name}'s profile picture`}
      />
      <span className="user-information--name">{name}</span>
    </div>
  );
}

export default UserInformation;
