import data from '../../services/data.json';

const CustomersTable = () => {

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Company</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.customerName}</td>
                            <td>{row.company}</td>
                            <td>{row.phoneNumber}</td>
                            <td>{row.email}</td>
                            <td>{row.country}</td>
                            <td>
                                <span className={`status ${row.status.toLowerCase() === 'active' ? 'status-active' : 'status-inactive'}`}>
                                    {row.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomersTable;