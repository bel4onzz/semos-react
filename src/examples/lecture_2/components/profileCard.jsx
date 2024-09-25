const ProfileCard = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.imgUrl} alt={props.name} />
      <p>Name: {props.name}</p>
      <span>Address: {props.address}</span>
    </div>
  )
}

// TODO: import and resolve the PropTypes

export default ProfileCard
