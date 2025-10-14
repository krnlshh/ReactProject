import { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                const mockData = {
                    id: 1,
                    name: "John Doe",
                    email: "john@example.com"
                };
                
                setData(mockData);
            } catch (err) {
                setError("Failed to fetch data");
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty array = run once on mount

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>User Data</h2>
            <p>Name: {data?.name}</p>
            <p>Email: {data?.email}</p>
        </div>
    );
}

export default DataFetcher;