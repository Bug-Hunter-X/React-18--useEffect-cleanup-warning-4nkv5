```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const controller = new AbortController();

  useEffect(() => {
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data', { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    return () => {
      // Clean up the effect when the component is unmounted
      controller.abort();
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default MyComponent;
```