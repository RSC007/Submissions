import React from 'react';
import { Table } from 'reactstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';
import { useDeleteUserMutation, useGetUsersQuery } from '../../api/userSlice';

export const UserTable = () => {
  const { data } = useGetUsersQuery({ endpoint: `users`, tag: "USER" }, true)
  const [userDelete] = useDeleteUserMutation()
  console.log("data", data);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.length && data.map((value) =>
            <tr>
              <th scope="row">{value.name}</th>
              <td>{value.email}</td>
              <td>{value.gender}</td>
              <td>{value.status}</td>
              <td><Pencil size={15} /> <Trash onClick={() => userDelete({ endpoint: `users/${value.id}`, tag: "USER" })} size={15} /></td>
            </tr>)
        }
      </tbody>
    </Table>
  );
}