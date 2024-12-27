# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by an incorrectly configured `useEffect` hook. The `useEffect` hook's dependency array is crucial for controlling when the effect runs.  In this example, the dependency array includes `count`, causing the effect to re-run every time `count` changes, creating an infinite update cycle. The solution shows the correct way to handle this scenario, typically by adding a condition to prevent infinite loops.