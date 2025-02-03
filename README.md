# React 18+ useEffect Cleanup Warning

This repository demonstrates a common warning in React 18 and later versions related to the `useEffect` hook.  The warning arises when an effect doesn't include a cleanup function to properly handle situations where the component unmounts or updates before the effect's asynchronous operation completes.  Ignoring this warning can lead to memory leaks and unexpected behavior.

The `bug.js` file shows the problematic code, and `bugSolution.js` provides a corrected version that demonstrates how to add a cleanup function.

## Problem:

The original code fetches data from an API within the `useEffect` hook, but it lacks a cleanup function. If the component unmounts before the fetch completes, the effect will continue running even though the component no longer exists, leading to unnecessary work and potential memory leaks.

## Solution:

The solution involves adding a `return` statement within the `useEffect` hook. This return statement should contain a cleanup function that cancels any ongoing operations, such as aborting the fetch request.

This example uses `AbortController` for a more robust cleanup, handling scenarios where the component unmounts while the fetch is still in progress.