```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause a warning in React 18+ because it's missing a return function
    // to clean up the effect when the component unmounts.
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // ... do something with data
      });
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```