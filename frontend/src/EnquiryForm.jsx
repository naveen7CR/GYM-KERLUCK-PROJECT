import { useState } from 'react';
import './EnquiryForm.css';

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        plan: 'Monthly',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Backend URL (local testing ke liye)
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

        try {
            const res = await fetch(`${API_URL}/api/enquiries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', plan: 'Monthly', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section className="enquiry-section" id="enquiry">
            <div className="enquiry-container">
                <h2>Book a Free Visit</h2>
                <p>Come see the gym for yourself. No commitment required!</p>

                <form className="enquiry-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="10-Digit Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[6-9]{1}[0-9]{9}"
                        title="Please enter a valid 10-digit Indian mobile number"
                        required
                    />
                    <select name="plan" value={formData.plan} onChange={handleChange}>
                        <option value="Monthly">Monthly (Rs 1,000)</option>
                        <option value="Quarterly">Quarterly (Rs 2,700)</option>
                        <option value="Half-yearly">Half-yearly (Rs 4,800)</option>
                        <option value="Yearly">Yearly (Rs 8,400)</option>
                        <option value="Not Decided">Not Decided Yet</option>
                    </select>
                    <textarea
                        name="message"
                        placeholder="Any questions or preferred time? (Optional)"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Sending...' : 'Submit Enquiry'}
                    </button>

                    {status === 'success' && <div className="success-msg">✅ Thank you! We will call you shortly.</div>}
                    {status === 'error' && <div className="error-msg">❌ Something went wrong. Please call us at 7982288293.</div>}
                </form>
            </div>
        </section>
    );
}