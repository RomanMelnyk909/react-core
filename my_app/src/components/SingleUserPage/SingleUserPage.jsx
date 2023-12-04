import { useParams } from "react-router-dom";

const SingleUserPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Single User with ID: {id}</div>;
};

export default SingleUserPage;
