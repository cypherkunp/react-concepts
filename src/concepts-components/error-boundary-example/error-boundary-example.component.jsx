import React from 'react';
import BuggyCounter from '../../components/buggy-counter/buggy-counter.component';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component';

const ErrorBoundaryExample = () => {
    return (
        <div style={{ margin: 200 }}>
            <h1>This is an example of Error Boundaries in React 16</h1>
            <h3>Click on the numbers to increase the counter</h3>
            <h5>The counter is programmed to throw when it reaches 5. This simulates a JS error in a component.</h5>
            <hr />
            <ErrorBoundary>
                <p>
                    These two counters are inside the same error boundary. If one crashes the error boundary will
                    replace both of them.
                </p>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
            <hr />
            <p>These two counters are inside their own error boundary. If one crashes the other is not affected.</p>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
        </div>
    );
};

export default ErrorBoundaryExample;
