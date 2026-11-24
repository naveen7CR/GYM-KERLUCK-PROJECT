import { useState } from 'react';
import './Admin.css';

export default function Admin() {
    const [adminKey, setAdminKey] = useState('');
    const [enquiries, setEnquiries] = useState([]);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const fetchEnquiries = async () => {
        try {
            // Direct URL hardcoded for testing
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

            const res = await fetch(`${API_URL}/api/enquiries?x-admin-key=${adminKey}`, {
                method: 'GET'
            });

            if (res.ok) {
                const data = await res.json();
                setEnquiries(data);
                setIsLoggedIn(true);
                setError('');
            } else {
                // Agar status 401 aaya toh password galat hai
                if (res.status === 401) {
                    setError('Galat Password! Kripya sahi Admin Key daalein.');
                } else {
                    setError('Backend error. Please try again.');
                }
            }
        } catch (err) {
            setError('Server error. Please try again.');
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="admin-login">
                <div className="login-box">
                    <h2>Admin Login</h2>
                    <p>Kerluck Gym Management</p>
                    <input
                        type="password"
                        placeholder="Enter Admin Key"
                        value={adminKey}
                        onChange={(e) => setAdminKey(e.target.value)}
                    />
                    <button onClick={fetchEnquiries}>Login</button>
                    {error && <p className="error">{error}</p>}
                </div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h1>Kerluck Gym - Enquiries</h1>
                <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>

            {enquiries.length === 0 ? (
                <p className="no-data">Abhi tak koi enquiry nahi aayi hai.</p>
            ) : (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Plan Interest</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enquiries.map((enq) => (
                                <tr key={enq._id}>
                                    <td>{new Date(enq.createdAt).toLocaleDateString()}</td>
                                    <td>{enq.name}</td>
                                    <td><a href={`tel:${enq.phone}`}>{enq.phone}</a></td>
                                    <td>{enq.plan}</td>
                                    <td>{enq.message || '-'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}