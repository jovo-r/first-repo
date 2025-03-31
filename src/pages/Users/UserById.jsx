import { useParams } from "react-router-dom"

const UserById = () => {
    const { id } = useParams ();
    return <div>User with ID: {id}</div>
};

export default UserById;