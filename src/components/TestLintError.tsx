import React from 'react';
import Unused from './Hero'; // This import is unused and should trigger the lint rule

export default function TestLintError() {
    return <div>Test Lint Error</div>;
} 