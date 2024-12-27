```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Condition prevents infinite loop
    let isMounted = true; 
    if(isMounted){
      setCount(prevCount => prevCount + 1);
    }
    return () => { isMounted = false; }
  }, []);

  return <div>Count: {count}</div>;
}
```