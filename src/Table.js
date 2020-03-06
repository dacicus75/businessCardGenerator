import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Company Name</th>
                <th>Email</th>
                <th>Phone Number</th>

                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.firstname}</td>
                <td>{row.lastname}</td>
                <td>{row.companyname}</td>
                <td>{row.email}</td>
                <td>{row.phonenumber}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}

export default Table;