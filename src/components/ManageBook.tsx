import { Link } from "react-router-dom";

const ManageBooks = () => {
    const {data} = useGetCommentQuery(id, {refetchOnMountOrArgChange:true, pollingInterval:1000});
    
    }

    const handleDeleteUser = Book =>{
        // fetch(`http://localhost:5000/book/${Book?._id}`,{
        //     method: 'DELETE',
        //     headers: {
        //         authorization: `bearer ${localStorage.getItem('accessToken')}`
        //     }
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     if(data.deletedCount > 0){
        //         refetch();
        //         toast.success(`Deleted ${Book?.name} Successfully`)
        //     }
        // })
    }

    return (
        <div>
            <h1 className='text-3xl'>Manage Client Request {Books?.length}</h1>
            <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
            <thead>
            <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>email</th>
                <th>Mobile</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>

            {
                Books?.map((Book, i) => <tr key={Book._id}>
                    <td>{i+1}</td>
                    <td>{Book?.name}</td>
                    <td>{Book?.email}</td>
                    <td>{Book?.mobile}</td>
                    <td>{Book?.message}</td>
                    <td>
                        <Link to={`/dashboard/update/${Book._id}`}><button className='btn btn-sm bg-red-700'>Update</button></Link>
                    </td>
                </tr>)
            }
            
            </tbody>
        </table>
</div>

        </div>
    );
};

export default ManageBooks;