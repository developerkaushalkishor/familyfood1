import React from "react";
import me from "../../assets/me.png";

const Users = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Photo Qty</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#llsj54fda</td>
                <td>Kaushal</td>
                <td>
                  <img src={me} alt="User" />
                </td>
                <td>Admin</td>
                <td>{"20-02-2005"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
